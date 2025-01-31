package com.cv_generator.requests;

import com.cv_generator.models.Message;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class MessageRequest {
    private Message message;

    private String lang;
}
