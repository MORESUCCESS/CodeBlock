import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import { connectToDB } from "./config/mongoose.js";
import { authRouter } from "./routes/authRoutues.js";

configDotenv();

const app = express();
app.use(cors());
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

// connect to database
connectToDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
