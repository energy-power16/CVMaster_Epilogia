package com.cv_generator.exceptions;

public class NotCompletePdfGenerationException extends RuntimeException {
    public NotCompletePdfGenerationException() {
    }

    public NotCompletePdfGenerationException(String message) {
        super(message);
    }

    public NotCompletePdfGenerationException(Throwable cause) {
        super(cause);
    }

    public NotCompletePdfGenerationException(String message, Throwable cause) {
        super(message, cause);
    }
}
