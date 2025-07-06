const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cloudinary = require('./services/cloudinary');

// Load environment variables 
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Mimar Backend');
});

// If the environment variable PORT is not set, default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
