package com.cv_generator.utils;

import com.cv_generator.entities.ResumeMessage;
import com.cv_generator.entities.ResumeSession;
import com.cv_generator.enums.Language;

import java.util.Map;
import java.util.regex.Pattern;

public class ProgressManager {
    private static final byte PERCENTAGE_VALUE = 100;

    private static final Map<String, Pattern> FIELD_VALIDATION_EN = Map.of(
            "Personal Info", Pattern.compile(
                    "(?=.*\\b(full name|first name|last name|phone|email|location|contact|address|linkedin|github|portfolio|website|date of birth)\\b)(?=.{20,})",
                    Pattern.CASE_INSENSITIVE
            ),
            "Education", Pattern.compile(
                    "(?=.*\\b(b\\.s\\.|m\\.s\\.|ph\\.d\\.|degree|university|college|graduation|major|minor|gpa|certificate|diploma|course|specialization|honors)\\b)(?=.{30,})",
                    Pattern.CASE_INSENSITIVE
            ),
            "Experience", Pattern.compile(
                    "(?=.*\\b(software engineer|product manager|developer|designer|intern|company|organization|work experience|role|responsibility|achievements|accomplishments|projects|collaboration|leadership|managed|developed|designed|implemented|worked on|teams|clients|deliverables|timeline)\\b)(?=.{50,})",
                    Pattern.CASE_INSENSITIVE
            ),
            "Skills", Pattern.compile(
                    "(?=.*\\b(go|bash|java|python|c|c\\+\\+|c#|javascript|typescript|html|css|sql|react|angular|vue|spring boot|docker|aws|azure|git|linux|windows|postgresql|mysql|agile|scrum)\\b)(?=.{20,})",
                    Pattern.CASE_INSENSITIVE
            )
    );

    private static final Map<String, Pattern> FIELD_VALIDATION_RU = Map.of(
            "Personal Info", Pattern.compile(
                    "(?=.*\\b(имя|фамилия|телефон|почта|локация|контакт|адрес|linkedin|github|портфолио|веб-сайт|дата рождения)\\b)(?=.{20,})",
                    Pattern.CASE_INSENSITIVE
            ),
            "Education", Pattern.compile(
                    "(?=.*\\b(бакалавр|магистр|аспирант|степень|университет|колледж|выпуск|специальность|доп. образование|аттестат|курс|специализация|диплом|сертификат|отличие)\\b)(?=.{30,})",
                    Pattern.CASE_INSENSITIVE
            ),
            "Experience", Pattern.compile(
                    "(?=.*\\b(инженер-программист|продуктовый менеджер|разработчик|дизайнер|стажёр|компания|организация|опыт работы|должность|обязанности|достижения|проекты|команда|управление|разработал|спроектировал|реализовал|клиенты|сроки)\\b)(?=.{50,})",
                    Pattern.CASE_INSENSITIVE
            ),
            "Skills", Pattern.compile(
                    "(?=.*\\b(go|bash|java|python|c|c\\+\\+|c#|javascript|typescript|html|css|sql|react|angular|vue|spring boot|docker|aws|azure|git|linux|windows|postgresql|mysql|agile|scrum)\\b)(?=.{20,})",
                    Pattern.CASE_INSENSITIVE
            )
    );

    public static int calculateProgress(ResumeSession session, String lang) {
        Map<String, Pattern> fieldValidation = Language.ru.toString().equalsIgnoreCase(lang) ? FIELD_VALIDATION_RU : FIELD_VALIDATION_EN;

        long completedSections = fieldValidation.entrySet().stream()
                .filter(entry -> session.getMessages().stream()
                        .map(ResumeMessage::getContent)
                        .anyMatch(msg -> entry.getValue().matcher(msg).find()))
                .count();

        return (int) ((completedSections * PERCENTAGE_VALUE) / fieldValidation.size());
    }
}
