const express = require(`express`);
const router = express.Router();
const postsList = require(`../data/posts.js`);
const postsControllers = require(`../controllers/posts.js`)
const noExistentEndPoint = require(`../middlewares/noExistentEndPoint.js`)

// index 
// Read: Visualizzare tutti gli elementi 
router.get(`/`, postsControllers.index);

// show
// Read: Visualizzare un elemento 
router.get(`/:id`, noExistentEndPoint, postsControllers.show);

// store
// Create: Creare un nuovo elemento 
router.post(`/`, postsControllers.store);

// updute
// Update: Modificare interamente un elemento 
router.put(`/:id`, noExistentEndPoint, postsControllers.updute);

// modify
// Update: modificare parzialmente un elemento 
router.patch(`/:id`, noExistentEndPoint, postsControllers.modify);

// destroy
// Delete: Eliminare un elemento
router.delete(`/:id`, noExistentEndPoint, postsControllers.destroy);

// Export
module.exports = router
