import {Schema, model, models} from "mongoose"; 

const UserSchema = new Schema({
    clerkId: {
        type: String, 
        requiured: true, 
        unique: true,
    },
    username: {
        type: String, 
        required: true, 
        unique: true,
    },
    photo: {
        type: String, 
        required: true,
    }, 
    firstName: {
        type: String || null,
    }, 
    lastName: {
        type: String || null,
    }, 
    planId: {
        type: Number, 
        default: 1, 
    }, 
    creditBalance: {
        type: Number, 
        defaults: 10, 
    }, 
}); 

const User = models?.User || model("User", UserSchema) 

export default User; 