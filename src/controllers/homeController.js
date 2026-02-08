import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.send('Probe Probe 123');
});


export default homeController;