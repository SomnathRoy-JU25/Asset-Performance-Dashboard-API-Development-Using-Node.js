// middleware/authenticate.js
const authenticate = (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken || authToken !== process.env.YOUR_API_KEY) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    next();
  };
  
module.exports = authenticate;