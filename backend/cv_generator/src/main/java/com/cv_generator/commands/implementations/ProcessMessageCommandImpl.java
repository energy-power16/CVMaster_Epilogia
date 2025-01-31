package com.cv_generator.commands.implementations;

import com.cv_generator.commands.BaseCommand;
import com.cv_generator.entities.ResumeMessage;
import com.cv_generator.entities.ResumeSession;
import com.cv_generator.enums.Language;
import com.cv_generator.exceptions.ResourceNotFoundException;
import com.cv_generator.models.BaseContent;
import com.cv_generator.models.Message;
import com.cv_generator.models.Resume;
import com.cv_generator.repositories.ResumeRepository;
import com.cv_generator.requests.MessageRequest;
import com.cv_generator.responses.GenerationResponse;
import com.cv_generator.services.ApiClientService;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.cv_generator.utils.PdfGenerator.generateBase64Pdf;
import static com.cv_generator.utils.ProgressManager.calculateProgress;

@AllArgsConstructor
public class ProcessMessageCommandImpl implements BaseCommand<GenerationResponse> {
    private final ResumeRepository resumeRepository;

    private final ApiClientService apiClientService;

    private final UUID chatId;

    private final MessageRequest request;

    public GenerationResponse execute() {
        ResumeSession session = resumeRepository.findByChatId(chatId)
                .orElseThrow(() -> new ResourceNotFoundException("Chat not found"));

        session.addMessage(request.getMessage().getContent());

        resumeRepository.save(session);

        int progress = calculateProgress(session, request.getLang());
        boolean isEnd = progress == 100;

        List<Message> responsesEn;
        List<Message> responsesRu;

        if (isEnd) {
            BaseContent resume = new Resume();
            String content = session.getMessages().stream()
                    .map(ResumeMessage::getContent)
                    .collect(Collectors.joining("\n"));
            resume.setContent(content);

            responsesEn = List.of(new Message("Your resume is complete."));
            responsesRu = List.of(new Message("Ваше резюме готово."));

            String pdfBase64 = generateBase64Pdf(resume.getContent());

            return request.getLang().equalsIgnoreCase(Language.ru.toString())
                    ? new GenerationResponse(chatId,null, responsesRu, progress, true, pdfBase64)
                    : new GenerationResponse(chatId, responsesEn, null, progress, true, pdfBase64);
        } else {
            responsesEn = apiClientService.getChatResponse(request.getMessage().getContent(), Language.en.toString())
                    .stream().map(Message::new).collect(Collectors.toList());

            responsesRu = apiClientService.getChatResponse(request.getMessage().getContent(), Language.ru.toString())
                    .stream().map(Message::new).collect(Collectors.toList());

            return request.getLang().equalsIgnoreCase(Language.ru.toString())
                    ? new GenerationResponse(chatId, null, responsesRu, progress, false, null)
                    : new GenerationResponse(chatId, responsesEn, null, progress, false, null);
        }
    }
}
