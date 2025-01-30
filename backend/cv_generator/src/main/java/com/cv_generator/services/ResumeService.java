package com.cv_generator.services;

import com.cv_generator.requests.MessageRequest;
import com.cv_generator.responses.InitializationResponse;
import com.cv_generator.responses.GenerationResponse;

public interface ResumeService {

    InitializationResponse initiateChatFromScratch(String lang);

    GenerationResponse processMessage(String chatId, MessageRequest request);

    String getResumePdf(String chatId, String lang);
}
