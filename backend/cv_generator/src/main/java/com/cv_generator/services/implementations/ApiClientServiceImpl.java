package com.cv_generator.services.implementations;

import com.cv_generator.enums.Language;
import com.cv_generator.responses.AIResponse;
import com.cv_generator.services.ApiClientService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class ApiClientServiceImpl implements ApiClientService {
    @Value("${api.url}")
    private String apiUrl;

    @Value("${api.key}")
    private String apiKey;

    public List<String> getChatResponse(String userMessage, String language) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();

        headers.set("Authorization", "Bearer " + apiKey);
        headers.set("Content-Type", "application/json");

        String systemFrames;

        //NOTE: The use of the Russian language has not yet been finalized
        if (Language.ru.toString().equals(language)) {
            systemFrames = "Вы помощник по созданию резюме. " +
                    "Ваша цель — помочь пользователям создать хорошее резюме. " +
                    "При проверке информации резюме обратите внимание на следующие ключевые разделы: " +
                    "1. Личная информация — Имя, контактные данные, профессиональное местоположение " +
                    "2. Образование — Академическая подготовка, степени, учебные заведения " +
                    "3. Профессиональный опыт — История работы, должности, основные обязанности " +
                    "4. Навыки — Технические навыки " +
                    "Если каких-то данных не хватает, предложите варианты улучшения резюме. " +
                    "Дайте конструктивную обратную связь и помогите пользователю улучшить содержание резюме.";
        } else {
            systemFrames = "You are a resume generation assistant. " +
                    "Your goal is to help users create a good resume. " +
                    "When reviewing resume information, look for these key sections: " +
                    "1. Personal Info - Name, contact details, professional location " +
                    "2. Education - Academic background, degrees, institutions " +
                    "3. Professional Experience - Work history, job roles, key responsibilities " +
                    "4. Skills - Technical skills " +
                    "If some details are missing, offer suggestions to enhance the resume. " +
                    "Provide constructive feedback and help the user improve their resume content. " +
                    "Be helpful and guide the user towards creating a strong, professional resume.";
        }

        String requestBody = String.format(
                "{ \"model\": \"gpt-4o-mini\", " +
                        "\"messages\": [" +
                        "{\"role\": \"system\", \"content\": \"%s\"}," +
                        "{\"role\": \"user\", \"content\": \"%s\"}], " +
                        "\"temperature\": 0.7, \"max_tokens\": 9000 }",
                systemFrames.replace("\"", "\\\""),
                userMessage.replace("\"", "\\\"")
        );

        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<AIResponse> response = restTemplate.postForEntity(apiUrl + "/chat/completions", entity, AIResponse.class);

        if (response.getBody() != null && response.getBody().getChoices() != null) {
            return response.getBody().getChoices()
                    .stream()
                    .map(choice -> choice.message().getContent())
                    .toList();
        }

        return List.of("Error in response");
    }
}
