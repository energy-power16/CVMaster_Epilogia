package com.cv_generator.services;

import java.util.List;

public interface ApiClientService {
    List<String> getChatResponse(String message, String language);
}