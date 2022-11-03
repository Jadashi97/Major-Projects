const express = require('express');

const router = express.Router() //this requires express Router from express to allow application endpoints to respond to clients 
const {getContacts} = require('../controllers/contacts'); //this grabs the routes from controllers

router
    .route('/')
    .get(getContacts);




module.exports = router;