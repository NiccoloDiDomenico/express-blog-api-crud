// Import
const postsList = require(`../data/posts.js`);


// Funcitions
// index
const index = (req,res) => {
    // inizialmente la lista di post filtrata corrisponde all'originale
    let filteredPostList = postsList;

    // se la richiesta contiene un filtro, filtriamo usando il metodo filter che ritorna un post tramite il metodo includes
    if (req.query.tags) {
        filteredPostList = postsList.filter((curPost) => {
            return curPost.tags.includes(req.query.tags)
        }); 
    };

    // restituisce la lista filtrata
    res.json(filteredPostList)
};

// show
const show = (req, res) => {
    // recupera l'id dall'URL e lo trasformo in numero
    const postId = parseInt(req.params.id);

    // cerca il post tramite l'id
    const post = postsList.find((curPost) => curPost.id === postId);

    // restituisce id trovato
    res.json(post);
};

// store
const store = (req,res) => {
    // console.log(req.body);

    // crea un nuovo id incrementando l'ultimo id presente
    const newId = postsList[postsList.length - 1].id + 1;

    // crea un nuovo post
    const newPost = {
        id: newId,
        ...req.body
    }

    // aggiunge il nuovo post alla lista 
    postsList.push(newPost)

    // debug
    console.log(postsList);

    // restituisce status e nuovo post
    res.status(201);
    res.json(newPost);
};

// updute
const updute = (req, res) => {
    // debug
    // console.log(req.body);
    
    // recupera l'id dall'URL e lo trasformo in numero
    const postId = parseInt(req.params.id);

    // cerca il post tramite l'id
    let post = postsList.find((curPost) => curPost.id === postId);

    // modifica il post
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;
    // post = {id: postId, ...req.body}; // modifica in una riga

    // debug
    console.log(postsList);
    
    // restituisce il post aggiornato
    res.json(post);
};

// modify
const modify = (req, res) => {
    // debug
    // console.log(req.body);
    
    // recupera l'id dall'URL e lo trasformo in numero
    const postId = parseInt(req.params.id);

    // cerca il post tramite l'id
    let post = postsList.find((curPost) => curPost.id === postId);

    // modifica il post
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;
    // post = {id: postId, ...req.body}; // modifica in una riga

    // debug
    console.log(postsList);
    
    // restituisce il post aggiornato
    res.json(post);
};

// destroy
const destroy = (req, res) => {
    // recupera l'id dall'URL e lo trasformo in numero
    const postId = parseInt(req.params.id);

    // cerca il post tramite l'id
    const post = postsList.find((curPost) => curPost.id === postId);

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