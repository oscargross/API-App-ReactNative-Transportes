import { Request, Response } from 'express'
import  * as companyService from '../services/AccessDBService'
import companySchema from '../schema/companySchema';


export let createCompany = async(req: Request, res: Response) => {
    let company = req.body;
    res.send (await companyService.create ({company}, companySchema))  
};

export let readAllCompanys = async (req: Request, res: Response)=>  {
    res.send(await companyService.readAll(companySchema))
   
};

export let findCompanyByParam = async (req: Request, res: Response)=>  {
    let param = req.params.param
    res.send(await companyService.findByParam({param}, companySchema))
   
};

export let updateCompany = async (req: Request, res: Response)=>  {
    let id = req.params.id
    let info = req.body;
    res.send(await companyService.update({id, info}, companySchema))
   
};

export let deleteCompany = async (req: Request, res: Response)=>  {
    let id = req.params.id
    res.send(await companyService.del({id}, companySchema))
   
};
