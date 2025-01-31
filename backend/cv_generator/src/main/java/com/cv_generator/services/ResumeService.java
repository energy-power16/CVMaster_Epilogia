package com.cv_generator.services;

import com.cv_generator.requests.MessageRequest;
import com.cv_generator.responses.InitializationResponse;
import com.cv_generator.responses.GenerationResponse;

import java.util.UUID;

public interface ResumeService {

    InitializationResponse initiateChatFromScratch(String lang);

    GenerationResponse processMessage(UUID chatId, MessageRequest request);

    String getResumePdf(UUID chatId, String lang);
}
