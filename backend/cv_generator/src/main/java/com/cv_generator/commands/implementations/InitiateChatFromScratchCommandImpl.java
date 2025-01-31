package com.cv_generator.commands.implementations;

import com.cv_generator.commands.BaseCommand;
import com.cv_generator.entities.ResumeSession;
import com.cv_generator.enums.Language;
import com.cv_generator.repositories.ResumeRepository;
import com.cv_generator.responses.InitializationResponse;
import lombok.AllArgsConstructor;

import java.util.List;
import java.util.UUID;

@AllArgsConstructor
public class InitiateChatFromScratchCommandImpl implements BaseCommand<InitializationResponse> {
    private final ResumeRepository resumeRepository;

    private final String lang;

    private static final List<String> MESSAGES_EN = List.of(
            "Welcome! Let's start creating your resume.",
            "Please provide detailed information for the resume:",
            "1. Personal Info - Name, contact details, professional location",
            "2. Education - Academic background, degrees, institutions",
            "3. Professional Experience - Work history, job roles, key responsibilities",
            "4. Skills - Technical skills"
    );

    private static final List<String> MESSAGES_RU = List.of(
            "Добро пожаловать! Давайте начнем создание вашего резюме.",
            "Пожалуйста, предоставьте подробную информацию для резюме.",
            "1. Личная информация — имя, контактные данные, место работы",
            "2. Образование — академическое образование, степени, учреждения",
            "3. Профессиональный опыт — история работы, должности, основные обязанности",
            "4. Навыки — технические навыки"
    );

    public InitializationResponse execute() {
        UUID chatId = UUID.randomUUID();

        resumeRepository.save(new ResumeSession(chatId));

        List<String> messages = Language.ru.toString().equalsIgnoreCase(lang) ? MESSAGES_RU : MESSAGES_EN;

        return new InitializationResponse(messages, null, chatId);
    }
}
