import mongoose from "mongoose"

export const connectToDB = async ()=>{
    mongoose.connection.on('connected', ()=>{
    console.log("Database connected successfully!")
    })

    await mongoose.connect(`${process.env.MONGODB}/codeblock`)
}