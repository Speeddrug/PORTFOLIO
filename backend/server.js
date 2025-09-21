const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');       // only once
const contactRoutes = require('./routes/contactRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();

const app = express();

// CORS setup
app.use(cors({
  origin: "http://localhost:3000",   // React frontend
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
