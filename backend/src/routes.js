import express from 'express';

import DevController from "./controllers/DevController.js";
import SearchController from "./controllers/SearchController.js";

const routes = express.Router();

routes.get('/search', SearchController.index);
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.delete('/dev/:id', DevController.delete);

export default routes;