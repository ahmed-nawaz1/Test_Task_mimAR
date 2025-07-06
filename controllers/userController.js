import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signupUser = async (req, res) => {

    //fatch the user data from the request body
    const { name, email, password, } = req.body;

    // validation
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }
    try {

        // Check if the user already exists
        const userExists = await User.findOne({ email });

        if (userExists) return res.status(400).json({ message: 'User already exists' });

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: 'user' // Default role
        });

        user.password = undefined; // Remove password from the response for security
        //send response
        res.status(201).json({
            message: 'User registered successfully',
            user
        });

    }
    catch (err) {

        // Handle errors
        res.status(500).json({
            message: 'Internal Server error',
            err
        });
    }
};




// +======================== Function to handle user login +=========================

export const loginUser = async (req, res) => {

    // Fetch the user data from the request body
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: 'User not registered' });

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        // validate the password
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate a JWT token
        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_Time || '1d' }
        );

        // Send the response with the token
        res.status(200).json({
            message: "Login successfully",
            token
        });

    } catch (err) {
        // Handle errors
        res.status(500).json({
            message: 'Server error',
            err
        });

    }
};
