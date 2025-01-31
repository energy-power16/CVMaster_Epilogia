package com.cv_generator.responses;

import com.cv_generator.models.Message;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class InitializationResponse extends ChatResponse {
    private UUID chatId;

    public InitializationResponse(List<Message> messagesEn,
                                  List<Message> messagesRu,
                                  UUID chatId) {
        super(messagesEn, messagesRu);
        this.chatId = chatId;
    }
}
