const express = require(`express`);
const app = express();
const port = 3000;
const posts = require(`./data/posts.js`);
const postsRouter = require(`./router/posts.js`);
const handleError = require(`./middlewares/handleError.js`);

// registra il body-parser 
app.use(express.json());
// registra gli assets statici
app.use(express.static(`public`));
// indica a express che esistono nuove rotte
app.use(`/posts`, postsRouter);

app.get("/", (req, res) => {
    res.send(`Server del mio Blog`);
});

app.get("/bacheca", (req, res) => {
    res.send({
        data: posts,
        count: posts.length
    });
});

// registra il middleware globale
app.use(handleError);

app.listen(port, () => {
    console.log(`Server in ascolto`); 
});