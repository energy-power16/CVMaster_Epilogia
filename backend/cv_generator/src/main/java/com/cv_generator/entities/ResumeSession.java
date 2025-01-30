package com.cv_generator.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "resume_sessions")
public class ResumeSession {
    @Id
    @Column(name = "chat_id", nullable = false)
    private String chatId;

    @Column(name = "lang", length = 2, nullable = false)
    private String lang = "en";

    @ElementCollection
    @CollectionTable(name = "resume_messages", joinColumns = @JoinColumn(name = "chat_id"))
    @Column(name = "message", length = 1000)
    private List<String> messages = new ArrayList<>();

    public ResumeSession(String chatId) {
        this.chatId = chatId;
    }

    public void addMessage(String message) {
        messages.add(message);
    }
}
