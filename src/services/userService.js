import User from "../models/user.js";

export function register (email, password){
    return User.create({email, password});
}