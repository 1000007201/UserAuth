import mongoose from "mongoose";

async function connectdb(){
    try{
        const dbPass = process.env.DB_PASS;
        const dbUser = process.env.DB_USER;
        const dbName = process.env.DB_NAME;
        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.tprgbkd.mongodb.net/${dbName}`); //we always have to add password in url encoded form
        console.log("mongoDb connected successfully....");
    }catch(error){
        console.log(`There is error in connection mongodb reason: ${error}`);
    }
};

export default connectdb;