const express = require("express");
const router = express.Router();
const loginController = require("../controllers/authControllers/loginController");
const signinController = require("../controllers/authControllers/signinController");


router.post('/sign-in',signinController); 
router.post('/login',loginController);

module.exports = router;