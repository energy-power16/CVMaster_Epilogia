package com.cv_generator.services.implementations;

import com.cv_generator.commands.BaseCommand;
import com.cv_generator.commands.implementations.GetResumePdfCommandImpl;
import com.cv_generator.commands.implementations.InitiateChatFromScratchCommandImpl;
import com.cv_generator.commands.implementations.ProcessMessageCommandImpl;
import com.cv_generator.repositories.ResumeRepository;
import com.cv_generator.requests.MessageRequest;
import com.cv_generator.responses.InitializationResponse;
import com.cv_generator.responses.GenerationResponse;
import com.cv_generator.services.ApiClientService;
import com.cv_generator.services.ResumeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

import static com.cv_generator.utils.Validator.validateLanguage;

@Service
@AllArgsConstructor
public class ResumeServiceImpl implements ResumeService {
    private final ResumeRepository resumeRepository;

    private final ApiClientService apiClientService;

    public InitializationResponse initiateChatFromScratch(String lang) {
        validateLanguage(lang);

        BaseCommand<InitializationResponse> initializationCommand = new InitiateChatFromScratchCommandImpl(resumeRepository, lang);

        return initializationCommand.execute();
    }

    public GenerationResponse processMessage(UUID chatId, MessageRequest request) {
        BaseCommand<GenerationResponse> processMessageCommand = new ProcessMessageCommandImpl(resumeRepository, apiClientService, chatId, request);

        return processMessageCommand.execute();
    }

    public String getResumePdf(UUID chatId, String lang) {
        validateLanguage(lang);

        BaseCommand<String> getResumePdfCommand = new GetResumePdfCommandImpl(resumeRepository, chatId, lang);

        return getResumePdfCommand.execute();
    }
}
