package com.cv_generator.responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public abstract class ChatResponse {
    private List<String> messagesEn;

    private List<String> messagesRu;
}
