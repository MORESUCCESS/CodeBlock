import express from "express";
import { login, logOut, signUp, userDetails } from "../controllers/user.js";
import { isUserLoggedIn } from "../middleware/auth.js";


export const authRouter = express.Router();

authRouter.post('/signup', signUp);
authRouter.post('/login', login);
authRouter.post('/logout', logOut);
authRouter.get('/getMe', isUserLoggedIn, userDetails);