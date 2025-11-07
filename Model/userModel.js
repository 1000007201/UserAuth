import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

const UserSchema = new mongoose.Schema(
    {
        uuid:     {type: String, default: uuid, unique: true},
        name:     {type: String, required: true},
        email:    {type: String, unique: true, required: true},
        password: {type: String, required: true}
    },
    {timestamps: true}
);

// It will run before saving data in database.
UserSchema.pre("save", async function(next){    // isModified = true when we need to hash password 
    // This case is written for update case when password is already hashed.
    if (!this.isModified("password")) return next();
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", UserSchema);

export default User;
