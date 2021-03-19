import { Request, Response } from 'express'
import  * as transportService from '../services/AccessDBService'
import transportSchema from '../schema/transportSchema';

export let createTransport = async(req: Request, res: Response) => {
    let transport = req.body;
    res.send (await transportService.create (transport, transportSchema))  
};

export let readAllTransports = async (req: Request, res: Response)=>  {
    console.log("ffff")

    res.send(await transportService.readAll(transportSchema))
   
};

export let findTransportByParam = async (req: Request, res: Response)=>  {
    let param = req.query
    console.log("ddd")
    res.send(await transportService.findByParam(param, transportSchema))
   
};

export let updateTransport = async (req: Request, res: Response)=>  {
    let id = req.query
    let info = req.body;
    res.send(await transportService.update(id, info, transportSchema))
   
};

export let deleteTransport = async (req: Request, res: Response)=>  {
    let id = req.params.id
    res.send(await transportService.del(id, transportSchema))
   
};
