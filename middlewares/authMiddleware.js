import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {

    //extract the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];

    //   validate the token 
    if (!token) {
        // return
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // validate the decoded token
        if ( !decoded ) {
            // return
            return res.status(401).json({ message: 'Invalid token' });
        } 
        
        // Attach the user information to the request object
        req.user = decoded;

        // Call the next middleware
        next();

    }
     catch (err) {

        // Handle errors
        return res.status(401).json({ 
            message: 'Invalid token' 
        });
    }
};


