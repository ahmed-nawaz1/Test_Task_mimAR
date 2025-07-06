import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();


const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    //check if the connection is successful
    console.log('MongoDB connected successfully');

  } catch (err) {

    console.error('MongoDB connection error:', err);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
