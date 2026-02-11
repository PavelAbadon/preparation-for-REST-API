import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
  res.render('home', {pageTitle: 'Home page'});
});

export default homeController;