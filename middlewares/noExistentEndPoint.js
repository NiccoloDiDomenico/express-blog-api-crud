// Import
const postsList = require(`../data/posts.js`);

// Functions
const noExistentEndPoint = (req, res, next) => {
    // debug
    console.log(`middleware sta funzionando`);
    
    // recupera l'id dell'URL e lo trasforma in numero
    const postId = parseInt(req.params.id);

    // cerca il post tramite l'id
    const post = postsList.find((curPost) => curPost.id === postId);

    // faccio il controllo
    if (post) {
        // prosegui
        next();
    } else {
        // imposta lo status 404
        res.status(404);
        // restituisce altre informazioni
        res.json({
            error: "Not found",
            message: "Post non trovato"
        });
    };
};


// Export
module.exports = noExistentEndPoint;