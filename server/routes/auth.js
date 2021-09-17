import express from 'express';
//import controllers
import { showResponse } from '../controllers/auth';
import { register } from '../controllers/register';
import { login } from "../controllers/login";

const router = express.Router();

router.get("/:message", showResponse);

//need post because will receive post request from client 
router.post('/register', register);
router.post("/login", login);

//need to use module.exports since 'require' is used to route in server.js
module.exports = router;