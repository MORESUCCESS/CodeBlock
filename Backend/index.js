import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import { connectToDB } from "./config/mongoose.js";
import { authRouter } from "./routes/authRoutues.js";
import { resourceRouter } from "./routes/resourcesRoutes.js";

configDotenv();

export const app = express();
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const PORT = process.env.PORT;

// api routes
app.get("/", (req, res)=>{
    res.status(200).json({success: "true", message: "Everything is fine!"});
})

// authRouter api endpoints
app.use('/api/auth', authRouter);

// resources api endpoints
app.use('/api/resources', resourceRouter);

// connect to database
connectToDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
