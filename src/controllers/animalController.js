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

animalController.get('/', async(req, res) => {
    const animals = await animalService.getAllAnimals();

    res.render('animals', { animals, pageTitle: 'Dashboard'});

});

animalController.get('/:id/details', async (req, res) =>{
    const animalId = req.params.id;
    const userId = req.user?.id;
    const animal = await animalService.getOneById(animalId);
    const isOwner = animal.owner.equals(userId);
    const isDonated = animal.donations.some(donation => donation.equals(userId));

    res.render('animals/details', {animal, isOwner, isDonated, pageTitle: 'Details Page'})
});

animalController.get('/:id/donations', isAuth, async (req, res) => {
    const animalId = req.params.id;
    const userId = req.user.id;

    await animalService.donate(animalId, userId);

    res.redirect(`/animals/${animalId}/details`);
});

animalController.get('/:id/delete', isAuth, async (req, res) => {
    const animalId = req.params.id;
    const userId = req.user.id;

    await animalService.deleteAnimal(animalId);

    res.redirect('/animals')
})

export default animalController;
