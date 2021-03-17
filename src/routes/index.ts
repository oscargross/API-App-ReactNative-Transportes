
import { Router } from 'express';
import * as DriverController from '../controllers/DriverController';

const routes = Router();

routes.post('/drivers', DriverController.createDriver);
// routes.get('/users/:id', DriverController.readDriver);
// routes.post('/users/:id', DriverController.updateDriver);
// routes.delete('/users/:id', DriverController.deleteDriver);
routes.get('/drivers', DriverController.readAllDrivers);



export default routes;