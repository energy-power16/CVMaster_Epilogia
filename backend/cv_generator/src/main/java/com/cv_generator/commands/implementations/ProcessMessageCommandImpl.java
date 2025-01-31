package com.cv_generator.commands.implementations;

import com.cv_generator.commands.BaseCommand;
import com.cv_generator.entities.ResumeSession;
import com.cv_generator.enums.Language;
import com.cv_generator.exceptions.ResourceNotFoundException;
import com.cv_generator.models.Resume;
import com.cv_generator.repositories.ResumeRepository;
import com.cv_generator.requests.MessageRequest;
import com.cv_generator.responses.GenerationResponse;
import com.cv_generator.services.ApiClientService;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.UUID;

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
        session.addMessage(request.getMessage());

        resumeRepository.save(session);

        int progress = calculateProgress(session, request.getLang());
        boolean isEnd = progress == 100;

        List<String> responsesEn;
        List<String> responsesRu;

        if (isEnd) {
            Resume resume = new Resume();
            resume.setContent(String.join("\n", session.getMessages()));

            responsesEn = List.of("Your resume is complete. Here is your file.");
            responsesRu = List.of("Ваше резюме готово. Вот ваш файл.");

            String pdfBase64 = generateBase64Pdf(resume.getContent());

            return request.getLang().equalsIgnoreCase(Language.ru.toString())
                    ? new GenerationResponse(null, responsesRu, progress, true, pdfBase64)
                    : new GenerationResponse(responsesEn, null, progress, true, pdfBase64);
        } else {
            responsesEn = apiClientService.getChatResponse(request.getMessage(), Language.en.toString());
            responsesRu = apiClientService.getChatResponse(request.getMessage(), Language.ru.toString());

            return request.getLang().equalsIgnoreCase(Language.ru.toString())
                    ? new GenerationResponse(null, responsesRu, progress, false, null)
                    : new GenerationResponse(responsesEn, null, progress, false, null);
        }
    }
}
