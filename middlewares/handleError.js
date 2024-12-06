// Function
const handleError = (err, req, res, next) => {
    // debug
    // console.log(`Server error`);
    
    // restituisce errore
    res.statusCode = 500;
    res.json({
        error: true,
        message: `Server error`
    });
};

// Export
module.exports = handleError;