import express from "express";
import { isUserLoggedIn } from "../middleware/auth.js";
import { addResource } from "../controllers/resource.js";

export const resourceRouter = express.Router();
resourceRouter.post('/add-resource', isUserLoggedIn, addResource);