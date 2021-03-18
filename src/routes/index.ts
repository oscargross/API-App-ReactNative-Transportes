
import { Router } from 'express';
import * as driverController from '../controllers/DriverController';
import * as companyController from '../controllers/CompanyController';
import * as transportController from '../controllers/TransportController';
import { Swagger } from '../docs/index';

const routes = Router();

const defaultReturn = () => ({
    core: 'API Renatinho de Moura',
    version: 'beta test',
    date: new Date(),
  });

export const Routes = () => {
    Drivers(routes);
    Company(routes);
    Transport(routes);
    Swagger(routes);
    routes.use((_, res) => res.status(404).json(defaultReturn()));
    return routes;
}

const Drivers = (_routes: any) => {
    _routes.route('/drivers')
        .get(driverController.readAllDrivers)
        .post(driverController.createDriver);
    _routes.route('/drivers/:id')
        .get(driverController.findDriverByParam)
        .put(driverController.updateDriver)
        .delete(driverController.deleteDriver)
}

const Company = (_routes: any) => {
    _routes.route('/company')
        .post(companyController.createCompany)
        .get(companyController.readAllCompanys);
    _routes.route('/company/:id')
        .get(companyController.findCompanyByParam)
        .put(companyController.updateCompany)
        .delete(companyController.deleteCompany);
}

const Transport = (_routes: any) => {
    _routes.route('/transport')
        .get(transportController.readAllTransports)
        .post(transportController.createTransport);
    _routes.route('/transport/:id')
        .get(companyController.findCompanyByParam)
        .put(transportController.updateTransport)
        .delete(transportController.deleteTransport);
}