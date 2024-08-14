import mongoose,{Schema} from "mongoose";

const UserSchema=new Schema({
    name:{
        type:String,
        required:true,
        index:true
    },
    pet:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:[true,"your password is required field"]
    }
})