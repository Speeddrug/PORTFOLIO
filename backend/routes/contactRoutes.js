const express = require("express");
const Contact = require("../controllers/models/Contact");
const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 Received contact form:", req.body);

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

