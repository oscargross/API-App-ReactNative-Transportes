import { Request, Response } from 'express'
import  * as DriverService from '../services/DriverService'


// create - post - /users

export let createDriver = async(req: Request, res: Response) => {
    let driver = req.body;
    res.send (await DriverService.createDriver ({driver}))  
};



// read - get - /users/{id}
export let readAllDrivers = async (req: Request, res: Response)=>  {
    res.send(await DriverService.readAllDrivers())
   
};


export let findDriverByParam = async (req: Request, res: Response)=>  {
    let param = req.params.param
    res.send(await DriverService.findDriverByParam({param}))
   
};

export let updateDriver = async (req: Request, res: Response)=>  {
    let id = req.params.id
    let info = req.body;

    res.send(await DriverService.updateDriver({id, info}))
   
};

export let deleteDriver = async (req: Request, res: Response)=>  {
    let id = req.params.id
    res.send(await DriverService.deleteDriver({id}))
   
};
