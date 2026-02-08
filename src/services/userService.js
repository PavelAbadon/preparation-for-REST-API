import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function register (email, password){
    const user = await User.findOne({email});
    if(user){
        throw new Error('User with this email already exists');
    }   

    return User.create({email, password});
}

export async function login(email, password) {
    const user = await User.findOne({email});
    const isValidPassword = await bcrypt.compare(password, user.password);
    const payload = {
        id: user.id,
        email: user.email,
    }


    if(!user){
        throw new Error('User with such email does not exist');
    }
    if(!isValidPassword){
        throw new Error('Wrong Password');
    }

    const token = jwt.sign(payload, 'SOMESecret', {expiresIn: '2h'});

    return token;

}