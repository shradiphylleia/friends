import mongoose,{Schema} from "mongoose";

const DoctorSchema=new Schema({
    name:{
        type:String,
        required:[true,"your name is a required field"],
        index:true
    },
    email:{
        type:String,
        required:[true,"your email is rewuired to setup contacts"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    contact:{
        type:String,
        required:[true,"Contacts is a required field"],
    },
    status:{
        type:String,
        required:[true,"Let us know when are you available"]
    },
    speciality:{
        type:String,
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
});

export const Doctor=mongoose.model("doctor",DoctorSchema);