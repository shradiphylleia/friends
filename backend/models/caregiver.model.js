import mongoose,{Schema} from "mongoose";

const CaregiverSchema=new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"passwrod is required"]
    },
    status:{
        type:String,
        required:[true,"tell us your availability"]
    },
    location: {
        type: {
            type: String, 
            enum: ['Point'], 
            required: true
        },
        coordinates: {
            type: [Number], 
            required: true
        }
    }
})