package com.cv_generator.entities;

import com.cv_generator.enums.Language;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "resume_sessions")
public class ResumeSession {
    @Id
    @Column(name = "chat_id", nullable = false)
    private UUID chatId;

    @Enumerated(EnumType.STRING)
    @Column(name = "lang", length = 2, nullable = false)
    private Language lang = Language.en;

    @ElementCollection
    @CollectionTable(name = "resume_messages", joinColumns = @JoinColumn(name = "chat_id"))
    @Column(name = "message", length = 1000)
    private List<String> messages = new ArrayList<>();

    public ResumeSession(UUID chatId) {
        this.chatId = chatId;
    }

    public void addMessage(String message) {
        messages.add(message);
    }
}
