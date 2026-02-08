import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userShema = new Schema({
    email:{
        type: String,
        required:[true, 'User email is required']
    },
    password:{
        type: String,
        required:[true, 'User password is required'],
    }
});

userShema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password, 12 );
});

const User = model('User', userShema);

export default User;