import express from "express";
import { get_user_profile, login_user, registerUser } from "../Controller/userControll.js";
import { auth } from "../Middleware/auth_middleware.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login_user);
router.get('/profile', auth, get_user_profile);


export default router;