import { Router } from "express";
import homeController from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";

const routes = Router();
routes.use(homeController);



//Last Controller is ErrorController
routes.use(errorController);

export default routes;