const checkMobileRequest = (req, res, next) => {
    if (req.headers['user-agent'] && req.headers['user-agent'].includes('Mobile')) {
        req.isMobile = true;
    } else {
        req.isMobile = false;
    }
    next();
};

export default checkMobileRequest;
