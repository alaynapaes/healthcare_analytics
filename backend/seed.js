const db = require("./db");

for (let i = 1; i <= 50; i++) {
  const userId = Math.floor(Math.random() * 3) + 1;
  const medicationId = Math.floor(Math.random() * 3) + 1;
  const taken = Math.random() > 0.3 ? 1 : 0;

  const query = `
    INSERT INTO adherence_logs (user_id, medication_id, taken, logged_at)
    VALUES (?, ?, ?, NOW() - INTERVAL ? DAY)
  `;

  const randomDays = Math.floor(Math.random() * 10);

  db.query(query, [userId, medicationId, taken, randomDays]);
}

console.log("Fake data inserted");
process.exit();
