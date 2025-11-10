import express from "express";
import { login_user, registerUser } from "../Controller/userControll.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login_user);


export default router;