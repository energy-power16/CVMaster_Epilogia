package com.cv_generator.responses;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class InitializationResponse extends ChatResponse {
    private String chatId;

    public InitializationResponse(List<String> messagesEn,
                                  List<String> messagesRu,
                                  String chatId) {
        super(messagesEn, messagesRu);
        this.chatId = chatId;
    }
}
