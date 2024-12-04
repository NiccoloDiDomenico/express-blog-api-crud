// Import
const postsList = require(`../data/posts.js`);


// Funcitions

// index
const index = (req,res) => {
    res.json({
        data: postsList,
        count: postsList.length
    });
};

// show
const show = (req, res) => {
    // recupera l'id dall'URL e lo trasformo in numero
    const postID = parseInt(req.params.id);
    // cerca il post tramite l'id
    const post = postsList.find((curPost) => curPost.id === postID);
    // fa il controllo
    if (!post) {
        // imposta lo status 404
        res.status(404);
        // restituisce altre informazioni
        res.json({
            error: "Not found",
            message: "Post non trovato"
        });
    };
    // restituisce id trovato
    res.json(post);
};

// store
const store = (req,res) => {
    res.send(`Qui creiamo un nuovo post`);
};

// updute
const updute = (req, res) => {
    const postId = req.params.id
    res.send(`Qui modifichiamo interamente il post ${postId}`);
};

// modify
const modify = (req, res) => {
    const postId = req.params.id
    res.send(`Qui modifichiamo parzialmente il post ${postId}`);
};

// destroy
const destroy = (req, res) => {
    // recupera l'id dall'URL e lo trasformo in numero
    const postID = parseInt(req.params.id);
    // cerca il post tramite l'id
    const post = postsList.find((curPost) => curPost.id === postID);
    // fa il controllo
    if (!post) {
        // imposta lo status 404
        res.status(404);
        // restituisce altre informazioni
        res.json({
            error: "Not found",
            message: "Post non trovato"
        });
    };
    // rimuove il post con l'id trovato
    postsList.splice(postsList.indexOf(post), 1);
    console.log(postsList);
    // restituisce lo status corretto
    res.sendStatus(204);
};


// Export
module.exports = {
    index,
    show,
    store,
    updute,
    modify,
    destroy
}