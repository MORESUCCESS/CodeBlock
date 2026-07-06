import { userModel } from "../schema/user.js";

export const signUp = async (req, res)=>{
    const {fullName, email, password} = req.body;

    if(!fullName || !email || !password){
        return res.status(400).json({
            success: false,
            message: "All fields are required!"
        })
    }

    try {
        // check if user already exist
        const alreadyExist = await userModel.findOne({email});

        if(alreadyExist){
            return res.status(400).json({
                success: false,
                message: "User already exist!"
            });
        }

        const payload = new userModel({fullName, email, password});
        
        // save to database
        await userModel.create(payload)
        res.status(200).json({
            success: true,
            message: "Account created successfully!"
        });
    } catch (error) {
        console.log(error.message)
    }
}