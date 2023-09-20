const catchAsync = require("../utils/catchAsync");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require('../models/userModel')

module.exports = {
  authenticateToken: catchAsync(async function (req, res, next) {
    // 1) Getting the token and check if it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return next(
        new Error("You are not logged in! Please log in to get access")
      );
    }

    // 2) Verify token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET); //The jwt.verify() function expects a callback function but instead we can make it return a prmoise and just await it
    // 3) Check if user still exists

    const currentUser = await User.findById(decoded.id);
    if (!currentUser)
      return next(
        new Error("The user belonging to this token does no longer exist")
      );

    //GRANT ACCESS TO PROTECTED ROUTE
    req.user = currentUser;
    next();
  })
};
