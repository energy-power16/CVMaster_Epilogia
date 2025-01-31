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

    @OneToMany(mappedBy = "resumeSession", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ResumeMessage> messages = new ArrayList<>();

    public ResumeSession(UUID chatId) {
        this.chatId = chatId;
    }

    public void addMessage(String content) {
        ResumeMessage message = new ResumeMessage(content, this);

        messages.add(message);
    }
}
