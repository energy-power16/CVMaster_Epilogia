package com.cv_generator.utils;

import com.cv_generator.enums.Language;
import com.cv_generator.exceptions.InvalidLanguageException;
import java.util.Arrays;

public class Validator {
    public static void validateLanguage(String lang) {
        if (Arrays.stream(Language.values()).noneMatch(language -> language.name().equalsIgnoreCase(lang))) {
            throw new InvalidLanguageException("Unsupported language: " + lang);
        }
    }
}
