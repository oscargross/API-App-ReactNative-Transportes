
import { Router } from 'express';
import * as DriverController from '../controllers/DriverController';

const routes = Router();

routes.post('/drivers', DriverController.createDriver);
routes.get('/drivers', DriverController.readAllDrivers);


routes.get('/users/:id', DriverController.findDriverByParam);


routes.put('/users/:id', DriverController.updateDriver);

routes.delete('/users/:id', DriverController.deleteDriver);

export default routes;