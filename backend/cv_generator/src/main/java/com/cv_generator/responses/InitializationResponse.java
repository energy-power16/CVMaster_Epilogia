package com.cv_generator.responses;

import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class InitializationResponse extends ChatResponse {
    private UUID chatId;

    public InitializationResponse(List<String> messagesEn,
                                  List<String> messagesRu,
                                  UUID chatId) {
        super(messagesEn, messagesRu);
        this.chatId = chatId;
    }
}
