
import { Router } from 'express';
import * as driverController from '../controllers/DriverController';
import * as companyController from '../controllers/CompanyController';
import * as transportController from '../controllers/TransportController';

const routes = Router();

export const Routes = () => {
    Drivers(routes);
    Company(routes);
    Transport(routes);
    return Router();
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
        .get(companyController.createCompany)
        .post(companyController.readAllCompanys);
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