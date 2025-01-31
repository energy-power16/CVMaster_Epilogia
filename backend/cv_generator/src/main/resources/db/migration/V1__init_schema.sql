CREATE TABLE IF NOT EXISTS resume_sessions
(
    chat_id UUID NOT NULL PRIMARY KEY,
    lang VARCHAR(2) NOT NULL
);

CREATE TABLE IF NOT EXISTS resume_messages
(
    id SERIAL PRIMARY KEY,
    chat_id UUID NOT NULL,
    message VARCHAR(1000),
    FOREIGN KEY (chat_id) REFERENCES resume_sessions (chat_id) ON DELETE CASCADE
);
