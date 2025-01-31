package com.cv_generator.models;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public class Message extends BaseContent {
    @JsonCreator
    public Message(String content) {
        this.setContent(content);
    }

    @JsonValue
    public String getContent() {
        return super.getContent();
    }
}
