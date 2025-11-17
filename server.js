require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Correct import
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5111;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', authRoutes);

// DB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log("❌ DB error:", err));

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
