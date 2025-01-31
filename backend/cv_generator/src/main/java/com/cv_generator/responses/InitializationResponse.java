package com.cv_generator.responses;

import com.cv_generator.models.Message;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
public class InitializationResponse extends ChatResponse {
    private static final int INITIAL_PROGRESS_VALUE = 0;

    private static final boolean CONVERSATION_STATUS_VALUE = false;

    public InitializationResponse(UUID chatId,
                                  List<Message> messagesEn,
                                  List<Message> messagesRu) {
        super(chatId, messagesEn, messagesRu, INITIAL_PROGRESS_VALUE, CONVERSATION_STATUS_VALUE, null);
    }
}
