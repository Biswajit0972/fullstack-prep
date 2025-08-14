const customMiddleware = (req, res, next) => {
    console.log(`Method: ${req.method}, URL: ${req.url}`);
    next();
};

module.exports = customMiddleware;