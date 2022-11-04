const express = require('express');

const router = express.Router() //this requires express Router from express to allow application endpoints to respond to clients 
const {getContacts, addContacts, deleteContacts} = require('../controllers/contacts'); //this grabs the routes from controllers

router
    .route('/')
    .get(getContacts)
    .post(addContacts)

router
    .route("/:id")
    .delete(deleteContacts)

module.exports = router;