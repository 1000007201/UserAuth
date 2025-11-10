import User from "../Model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function registerUser(req, res){
    try{
        const {email, name, password} = req.body;
        if (email && name && password){
            const user = await User.create(req.body);
            res.json({status: "Register api call!!"});
        }
        else res.json({status: "error", msg: "Enter all required params"});
    }catch(error){
        res.status(404).json({status: "error", "reason": error.message})
    }
};

async function login_user(req, res) {
    try{
        const {email, password} = req.body;
        if (email && password){
            const UserRec = await User.findOne({email: email}); //Getting user record
            if (!UserRec) throw new error("User not found");
            const isMatch = await bcrypt.compare(password, UserRec.password); //Verify password
            if (!isMatch) throw new error("Enter right credentials")
            const Token = jwt.sign(
                {user_id: UserRec.uuid},
                process.env.MY_SECRET_KEY,
                {expiresIn: '1h'}
            );
            res.json({status: "login Successfull", token: Token});
        }
        else throw new error("Enter all required params");
    }catch(error){
        res.status(404).json({status: "error", "reason": error.message});
    };
}

export {registerUser, login_user};