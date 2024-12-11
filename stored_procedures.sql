CREATE DATABASE mydatabase;

USE mydatabase;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //

CREATE PROCEDURE GetAllUsers()
BEGIN
    SELECT * FROM users;
END //

CREATE PROCEDURE GetUserById(IN userId INT)
BEGIN
    SELECT * FROM users WHERE id = userId;
END //

CREATE PROCEDURE CreateUser(IN userName VARCHAR(255), IN userEmail VARCHAR(255), IN userAge INT)
BEGIN
    INSERT INTO users (name, email, age) VALUES (userName, userEmail, userAge);
END //

CREATE PROCEDURE UpdateUser(IN userId INT, IN userName VARCHAR(255), IN userEmail VARCHAR(255), IN userAge INT)
BEGIN
    UPDATE users SET name = userName, email = userEmail, age = userAge WHERE id = userId;
END //

CREATE PROCEDURE DeleteUser(IN userId INT)
BEGIN
    DELETE FROM users WHERE id = userId;
END //

DELIMITER ;
