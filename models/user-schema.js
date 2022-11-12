import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const userSchema = new mongoose.Schema({
    user_id: Number,
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
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, {
    model: "user",
    field: "user_id",
    startAt: 101,
    incrementBy: 1,
});
const user=mongoose.model("user", userSchema);
export default user;