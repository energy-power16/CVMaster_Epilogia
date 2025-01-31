package com.cv_generator.commands.implementations;

import com.cv_generator.commands.BaseCommand;
import com.cv_generator.entities.ResumeMessage;
import com.cv_generator.entities.ResumeSession;
import com.cv_generator.enums.Language;
import com.cv_generator.exceptions.NotCompleteResumeException;
import com.cv_generator.exceptions.ResourceNotFoundException;
import com.cv_generator.models.BaseContent;
import com.cv_generator.models.Resume;
import com.cv_generator.repositories.ResumeRepository;
import lombok.AllArgsConstructor;

import java.util.UUID;
import java.util.stream.Collectors;

import static com.cv_generator.utils.PdfGenerator.generateBase64Pdf;
import static com.cv_generator.utils.ProgressManager.calculateProgress;

@AllArgsConstructor
public class GetResumePdfCommandImpl implements BaseCommand<String> {
    private final ResumeRepository resumeRepository;

    private final UUID chatId;

    private final String lang;

    public String execute() {
        ResumeSession session = resumeRepository.findByChatId(chatId)
                .orElseThrow(() -> new ResourceNotFoundException("Chat not found"));
        if (calculateProgress(session, lang) < 100) {
            throw new NotCompleteResumeException(
                    lang.equalsIgnoreCase(Language.ru.toString())
                            ? "Резюме еще не завершено"
                            : "Resume is not complete yet"
            );
        }

        BaseContent resume = new Resume();
        String content = session.getMessages().stream()
                .map(ResumeMessage::getContent)
                .collect(Collectors.joining("\n"));

        resume.setContent(content);

        return generateBase64Pdf(resume.getContent());
    }
}
