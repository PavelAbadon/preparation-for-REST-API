import { Router } from "express";

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('users/register', );
});


export default userController;