import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateAuthToken } from "../utils/tokenUtils.js";


export async function register (email, password){
    const user = await User.findOne({email});
    if(user){
        throw new Error('User with this email already exists');
    }   
    const newUser = await User.create({email, password});
    const token = generateAuthToken(newUser);
    return token;
}

export async function login(email, password) {
    const user = await User.findOne({email});
        
    if(!user){
        throw new Error('User with such email does not exist');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if(!isValidPassword){
        throw new Error('Wrong Password');
    }

    const token = generateAuthToken(user);
    return token;
}