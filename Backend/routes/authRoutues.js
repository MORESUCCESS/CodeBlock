import express from "express";
import { login, logOut, signUp } from "../controllers/user.js";


export const authRouter = express.Router();

authRouter.post('/signup', signUp);
authRouter.post('/login', login);
authRouter.post('/logout', logOut);