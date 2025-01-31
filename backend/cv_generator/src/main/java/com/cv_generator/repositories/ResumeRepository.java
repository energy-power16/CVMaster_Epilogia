package com.cv_generator.repositories;

import com.cv_generator.entities.ResumeSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ResumeRepository extends JpaRepository<ResumeSession, UUID> {
    Optional<ResumeSession> findByChatId(UUID chatId);
}
