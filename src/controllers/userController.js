import { Router } from "express";
import { userService } from "../services/index.js";

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('users/register', );
});

userController.post('/register', async(req, res) =>{
    const {email, password, rePassword} = req.body;
    const result = await userService.register( email, password, rePassword );

    res.redirect('/');
})


export default userController;