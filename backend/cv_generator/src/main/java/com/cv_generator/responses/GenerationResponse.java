package com.cv_generator.responses;

import com.cv_generator.models.Message;
import lombok.*;

import java.util.List;

@Getter
@Setter
public class GenerationResponse extends ChatResponse {
    private int progress;

    private boolean isEndOfConversation;

    private String pdfFile;

    public GenerationResponse(List<Message> messagesEn,
                              List<Message> messagesRu,
                              int progress,
                              boolean isEndOfConversation,
                              String pdfFile) {
        super(messagesEn, messagesRu);

        this.progress = progress;
        this.isEndOfConversation = isEndOfConversation;
        this.pdfFile = pdfFile;
    }
}
