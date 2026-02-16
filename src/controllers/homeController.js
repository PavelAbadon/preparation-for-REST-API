import { Router } from "express";
import * as animalService from "../services/animalService.js";

const homeController = Router();

homeController.get('/', async(req, res) => {
  const lastestAnimals = await animalService.getLatest();
  console.log(lastestAnimals);


  res.render('home', {animals:lastestAnimals, pageTitle: 'Home page'});
});

export default homeController;