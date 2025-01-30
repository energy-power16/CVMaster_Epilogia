package com.cv_generator.responses;

import com.cv_generator.models.Choice;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AIResponse {
    private List<Choice> choices;
}
