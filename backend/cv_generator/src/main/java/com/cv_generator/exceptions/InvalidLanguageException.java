package com.cv_generator.exceptions;

public class InvalidLanguageException extends RuntimeException {
    public InvalidLanguageException() {
    }

    public InvalidLanguageException(String message) {
        super(message);
    }

    public InvalidLanguageException(Throwable cause) {
        super(cause);
    }

    public InvalidLanguageException(String message, Throwable cause) {
        super(message, cause);
    }
}