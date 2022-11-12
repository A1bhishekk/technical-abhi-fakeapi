import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    age:{
        type:Number,
        required:[true,"Age is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    mobile:{
        type:String,
        required:[true,"Mobile is required"]
    },
    country:{
        type:String,
        required:[true,"Country is required"]
    },
    joining:{
        type:Date,
        default:Date.now
    },
});

const user=mongoose.model("users", userSchema);
export default user;