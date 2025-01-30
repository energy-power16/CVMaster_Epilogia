package com.cv_generator.requests;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class MessageRequest {
    private String message;

    private String lang;
}
