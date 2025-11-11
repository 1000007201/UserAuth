import jwt from "jsonwebtoken";

async function auth(req, res, next){
    try{
        const Token       = req.headers["authorisation"];
        const UserDecoded = jwt.verify(Token, process.env.MY_SECRET_KEY);
        req.user_uuid     = UserDecoded["user_id"];
        next();
    }catch(error){
        res.status(404).json({status: "error", "reason": error.messgae});
    }
};


export {auth};