package com.cv_generator.responses;

import com.cv_generator.models.Message;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public abstract class ChatResponse {
    private List<Message> messagesEn;

    private List<Message> messagesRu;
}
