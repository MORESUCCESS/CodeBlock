import { userModel } from "../schema/user.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

// signup controller
export const signUp = async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    // check if user already exist
    const alreadyExist = await userModel.findOne({ email });

    if (alreadyExist) {
      return res.status(400).json({
        success: false,
        message: "User already exist!",
      });
    }

    const payload = new userModel({ fullName, email, password });

    // save to database
    await userModel.create(payload);

    // create or generate a token for user
    const token = jsonwebtoken.sign(
      { id: payload._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const userData = await userModel.findOne(payload._id).select("-password");
    return res.status(200).json(userData);
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

// login controller function

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    const userExist = await userModel.findOne({ email });

    if (!userExist) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid email address!" });
    }

    // check if password is correct
    const isPasswordCorrect = await bcrypt.compare(password, userExist.password);
    if(!isPasswordCorrect){
        return res.status(404).json({success: false, message: "Incorrect password"})
    }

    // create or generate a token for user
    const token = jsonwebtoken.sign(
      { id: userExist._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const userData = await userModel.findOne(userExist._id).select("-password");
    return res.status(200).json(userData);

  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
