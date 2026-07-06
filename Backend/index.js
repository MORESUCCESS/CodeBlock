import express from "express"
import cors from "cors"
import { configDotenv } from "dotenv";
import { connectToDB } from "./config/mongoose.js";

configDotenv();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// api routes
app.get("/", (req, res)=>{
    res.status(200).json({message: "Everything is fine!"});
})

// connect to database
connectToDB();

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});
