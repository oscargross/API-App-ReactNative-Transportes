
import { Router } from 'express';
import * as DriverController from '../controllers/DriverController';

const routes = Router();

routes.post('/users', DriverController.createUser);
routes.get('/users/:id', DriverController.readUser);
routes.post('/users/:id', DriverController.updateUser);
routes.delete('/users/:id', DriverController.deleteUser);
routes.get('/users', DriverController.listAllUser);
routes.delete('/users/:id/:name', DriverController.deleteUserByName)



routes.post('/posts', DriverController.createUser);
routes.get('/posts/:id', DriverController.readUser);
routes.post('/posts/:id', DriverController.updateUser);
routes.delete('/posts/:id', DriverController.deleteUser);
routes.get('/posts', DriverController.listAllUser);
routes.delete('/posts/:id/:name', DriverController.deleteUserByName)

export default routes;