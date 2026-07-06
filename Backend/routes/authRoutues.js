import express from "express";
import { signUp } from "../controllers/user.js";


export const authRouter = express.Router();

authRouter.post('/signup', signUp);