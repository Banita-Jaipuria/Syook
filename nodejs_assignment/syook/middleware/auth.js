const jwt = require('jsonwebtoken');

// protect Routes
const auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      code: 401,
      message: 'You are not authorized to access this resource',
    });
  }

  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return next(
      new ApiError(
        httpStatus.UNAUTHORIZED,
        'Please login to access this resource'
      )
    );
  }
};

// Grant access to specific Role
const authorize =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.userRole)) {
      return res.status(401).json({
        code: 401,
        message: 'You are not authorized to access this resource',
      });
    }

    return next();
  };

module.exports = {
  auth,
  authorize,
};
