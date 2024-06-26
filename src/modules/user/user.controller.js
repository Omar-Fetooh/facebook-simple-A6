import userModel from "../../../database/models/user.model.js";
import bcrypt from "bcrypt"
export const register = async (req, res) => {
    const { userName, email, password } = req.body;
    const userExit = await userModel.findOne({ where: { email } })
    if (userExit) {
        return res.json({ message: "User already exists" })
    }
    const hashedPassword = bcrypt.hashSync(password, 8);
    const user = await userModel.create({ userName, email, password: hashedPassword })
    res.json({ message: "User Registered successfully", user })
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ where: { email: email } })
    if (!user) {
        return res.json({ message: "Sorry , User Doesn't exist" })
    }
    const isPassCorrect = bcrypt.compareSync(password, user.password);
    if (!isPassCorrect) {
        return res.json({ message: "Invalid password" })
    }
    const loginStatus = await user.update({ loginStatus: true })
    return res.json({ message: "User Logged In Successfully", loginStatus })
}

export const logout = async (req, res) => {
    const { id } = req.query;
    const loginStatus = await userModel.update(
        { loginStatus: false },
        { where: { id } }
    );
    res.json({ message: "User logged out successfully", loginStatus })
}

