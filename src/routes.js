import { Router } from "express";
import homeController from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";
import userController from "./controllers/userController.js";

const routes = Router();
routes.use(homeController);
routes.use('/users', userController);


//Last Controller is ErrorController
routes.use(errorController);

export default routes;