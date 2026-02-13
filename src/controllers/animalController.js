import { Router } from "express";
import * as animalService from "../services/animalService.js";
import { isAuth } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const animalController = Router();

animalController.get('/create', isAuth, async (req, res) => {
    res.render('animals/create', { pageTitle: 'Add animal' });
});

animalController.post('/create', isAuth, async (req, res) => {
    const animalData = req.body;
    const userId = req.user.id;

    try {
        await animalService.createAnimal(animalData, userId);
        res.redirect('/');
    } catch (err) {
        res.render('animals/create', {
            error: getErrorMessage(err),
            animal: animalData
        });
    }
});

export default animalController;
