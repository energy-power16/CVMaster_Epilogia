package com.cv_generator.responses;

import lombok.*;

import java.util.List;

@Getter
@Setter
public class GenerationResponse extends ChatResponse {
    private int progress;

    private boolean isEndOfConversation;

    private String pdfFile;

    public GenerationResponse(List<String> messagesEn,
                              List<String> messagesRu,
                              int progress,
                              boolean isEndOfConversation,
                              String pdfFile) {
        super(messagesEn, messagesRu);

        this.progress = progress;
        this.isEndOfConversation = isEndOfConversation;
        this.pdfFile = pdfFile;
    }
}
