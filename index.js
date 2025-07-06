const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cloudinary = require('./services/cloudinary');
const cors = require('cors');

// Load environment variables 
dotenv.config();

// Connect to the database
connectDB();

// ✅ Initialize Express app
const app = express();

// ✅ CORS setup (allow all origins with credentials)
app.use(
  cors({
    origin: function (origin, callback) {
      callback(null, origin); // allow all origins
    },
    credentials: true,
  })
);

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use(userRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to Mimar Backend');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
