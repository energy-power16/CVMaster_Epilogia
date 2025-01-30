CREATE TABLE IF NOT EXISTS resume_sessions
(
    chat_id VARCHAR(255) NOT NULL PRIMARY KEY,
    lang VARCHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS resume_messages
(
    chat_id VARCHAR(255) NOT NULL,
    message VARCHAR(1000),
    FOREIGN KEY (chat_id) REFERENCES resume_sessions (chat_id)
);
