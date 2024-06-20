CREATE TABLE users(
    id INT_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(username, password) VALUES
('jeff', 'password2'),
('ethan', 'password10'),
('clive', 'password300'),
