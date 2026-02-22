INSERT INTO users (name, age, gender, city, registration_date)
VALUES ('John Doe', 45, 'Male', 'Delhi', '2025-01-01');

INSERT INTO medications (user_id, medication_name, category, frequency, start_date, end_date)
VALUES (1, 'Metformin', 'Diabetes', 'daily', '2025-01-01', '2025-12-31');

INSERT INTO adherence_logs (user_id, medication_id, scheduled_time, taken, logged_at)
VALUES (1, 1, '2025-02-01 08:00:00', 1, NOW());

INSERT INTO adherence_logs (user_id, medication_id, taken, logged_at)
VALUES
(1, 1, 0, '2026-02-14 08:00:00'),
(1, 1, 1, '2026-02-13 08:00:00'),
(1, 1, 0, '2026-02-12 08:00:00'),
(1, 1, 1, '2026-02-11 08:00:00');



