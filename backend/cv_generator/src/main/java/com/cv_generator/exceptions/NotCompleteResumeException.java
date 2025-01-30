package com.cv_generator.exceptions;

public class NotCompleteResumeException extends RuntimeException {
    public NotCompleteResumeException() {
    }

    public NotCompleteResumeException(String message) {
        super(message);
    }

    public NotCompleteResumeException(Throwable cause) {
        super(cause);
    }

    public NotCompleteResumeException(String message, Throwable cause) {
        super(message, cause);
    }
}
