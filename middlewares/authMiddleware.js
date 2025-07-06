const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.headers.authorization?.split(' ')[1];

  // Validate the token
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Attach the user information to the request object
    req.user = decoded;

    // Call the next middleware
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid token'
    });
  }
};

module.exports = { auth };
