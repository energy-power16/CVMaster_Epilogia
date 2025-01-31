package com.cv_generator.responses;

import com.cv_generator.models.Message;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
public abstract class ChatResponse {
    private UUID chatId;

    private List<Message> messagesEn;

    private List<Message> messagesRu;

    private int progress;

    private boolean isEndOfConversation;

    private String pdfFile;
}
