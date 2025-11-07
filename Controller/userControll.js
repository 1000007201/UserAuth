import User from "../Model/userModel.js";

async function registerUser(req, res){
    try{
        console.log("inside controller function!!");
        console.log(req.body);
        // console.log(await User.find());
        const user = await User.create(req.body);
        console.log("User created!!!");
        console.log(user);
        res.json({status: "Register api call!!"});
    }catch(error){
        res.status(404).json({status: "error", "reason": error})
    }
};

export {registerUser};