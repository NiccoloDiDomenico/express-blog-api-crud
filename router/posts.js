const express = require(`express`);
const router = express.Router();
const postsList = require(`../data/posts.js`);
const postsControllers = require(`../controllers/posts.js`)

// index 
// Read: Visualizzare tutti gli elementi 
router.get(`/`, postsControllers.index);

// show
// Read: Visualizzare un elemento 
router.get(`/:id`, postsControllers.show);

// store
// Create: Creare un nuovo elemento 
router.post(`/`, postsControllers.store);

// updute
// Update: Modificare interamente un elemento 
router.put(`/:id`, postsControllers.updute);

// modify
// Update: modificare parzialmente un elemento 
router.patch(`/:id`, postsControllers.modify);

// destroy
// Delete: Eliminare un elemento
router.delete(`/:id`, postsControllers.destroy);

// Export
module.exports = router
