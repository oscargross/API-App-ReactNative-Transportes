import { Request, Response } from 'express'
import  * as DriverService from '../services/AccessDBService'
import driverSchema from '../schema/driverSchema';


export let createDriver = async(req: Request, res: Response) => {
    let driver = req.body;
    res.send (await DriverService.create (driver, driverSchema))  
};

export let readAllDrivers = async (req: Request, res: Response)=>  {
    res.send(await DriverService.readAll(driverSchema))
   
};

export let findDriverByParam = async (req: Request, res: Response)=>  {
    let param = req.params.param
    res.send(await DriverService.findByParam(param, driverSchema))
   
};

export let updateDriver = async (req: Request, res: Response)=>  {
    let id = req.params.id
    let info = req.body;
    res.send(await DriverService.update(id, info, driverSchema))
   
};

export let deleteDriver = async (req: Request, res: Response)=>  {
    let id = req.params.id
    res.send(await DriverService.del(id, driverSchema))
   
};
