const db = require("../db");

exports.getOverallAdherence = (req, res) => {
  const query = `
    SELECT 
      COALESCE(
        (SUM(taken) / NULLIF(COUNT(*), 0)) * 100,
        0
      ) AS adherence_percentage
    FROM adherence_logs
  `;

  db.query(query, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      adherence_percentage: result[0].adherence_percentage
    });
  });
};

exports.addAdherenceLog = (req, res) => {
  const { user_id, medication_id, taken } = req.body;

  const query = `
    INSERT INTO adherence_logs (user_id, medication_id, taken, logged_at)
    VALUES (?, ?, ?, NOW())
  `;

  db.query(query, [user_id, medication_id, taken], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({ message: "Adherence log added successfully" });
  });
};

exports.getAdherenceByUser = (req, res) => {
  const query = `
    SELECT 
      user_id,
      (SUM(taken) / COUNT(*)) * 100 AS adherence_percentage
    FROM adherence_logs
    GROUP BY user_id
  `;

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.getDailyAdherence = (req, res) => {
  const query = `
    SELECT 
      DATE(logged_at) AS date,
      ROUND((SUM(taken) / COUNT(*)) * 100, 2) AS adherence_percentage
    FROM adherence_logs
    GROUP BY DATE(logged_at)
    ORDER BY date;
  `;

  db.query(query, (err, result) => {
    if (err) return res.status(500).json(err);
    const formatted = result.map(row => ({
  date: row.date.toISOString().split("T")[0],
  adherence_percentage: Number(row.adherence_percentage)
}));

res.json(formatted);

  });
};



