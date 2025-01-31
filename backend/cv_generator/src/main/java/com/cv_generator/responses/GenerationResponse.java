package com.cv_generator.responses;

import com.cv_generator.models.Message;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class GenerationResponse extends ChatResponse {
    public GenerationResponse(UUID chatID,
                              List<Message> messagesEn,
                              List<Message> messagesRu,
                              int progress,
                              boolean isEndOfConversation,
                              String pdfFile) {
        super(chatID, messagesEn, messagesRu, progress, isEndOfConversation, pdfFile);
    }
}
