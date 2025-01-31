package com.cv_generator.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "resume_messages")
@Getter
@Setter
@NoArgsConstructor
public class ResumeMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "message", length = 1000)
    private String content;

    @ManyToOne
    @JoinColumn(name = "chat_id", nullable = false)
    private ResumeSession resumeSession;

    public ResumeMessage(String content,
                         ResumeSession resumeSession) {
        this.content = content;
        this.resumeSession = resumeSession;
    }
}
