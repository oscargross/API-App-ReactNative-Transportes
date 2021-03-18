
import { Router } from 'express';
import * as driverController from '../controllers/DriverController';
import * as companyController from '../controllers/CompanyController';
import * as transportController from '../controllers/TransportController';


const routes = Router();

routes.post('/drivers', driverController.createDriver);
routes.get('/drivers', driverController.readAllDrivers);
routes.get('/users/:id', driverController.findDriverByParam);
routes.put('/users/:id', driverController.updateDriver);
routes.delete('/users/:id', driverController.deleteDriver);

routes.post('/company', companyController.createCompany);
routes.get('/company', companyController.readAllCompanys);
routes.get('/company/:id', companyController.findCompanyByParam);
routes.put('/company/:id', companyController.updateCompany);
routes.delete('/company/:id', companyController.deleteCompany);

routes.post('/transport', transportController.createTransport);
routes.get('/transport', transportController.readAllTransports);
routes.get('/transport/:id', transportController.findTransportByParam);
routes.put('/transport/:id', transportController.updateTransport);
routes.delete('/transport/:id', transportController.deleteTransport);

export default routes;