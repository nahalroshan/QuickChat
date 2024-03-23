import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength:6
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    profilepic: {
        type: String,
        default:""
        // You can add additional properties here as needed, such as default value or validation
    }
},{timestamps: true});

const User  = mongoose.model("User",userSchema);
export default User;