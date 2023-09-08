const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const signupController = require('./src/controllers/signupController');


// Rotas da home
route.get('/', homeController.index);

// Rotas da home
route.get('/login/index', loginController.index);
route.get('/signup/index', signupController.index);


module.exports = route;
