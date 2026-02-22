CREATE DATABASE healthcare_analytics;
USE healthcare_analytics;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    city VARCHAR(100),
    registration_date DATE
);

CREATE TABLE medications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    medication_name VARCHAR(100),
    category VARCHAR(100),
    frequency VARCHAR(20),
    start_date DATE,
    end_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE adherence_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    medication_id INT,
    scheduled_time DATETIME,
    taken BOOLEAN,
    logged_at DATETIME,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (medication_id) REFERENCES medications(id)
);
