import { Request, Response } from 'express'
import  * as DriverService from '../services/DriverService'


// create - post - /users

export let createUser = async(req: Request, res: Response) => {
    let user = req.body;
    await DriverService.createUser({user}, (result:any)=>{
        res.send(result)
    })    
};



// read - get - /users/{id}
export let readUser = async (req: Request, res: Response) =>  {
    let id = req.params.id
    await DriverService.readUser({id}, (result: any) => {
        res.send(result)
    })
};

// update - post = /users/{id}

export let updateUser = async(req: Request, res: Response) => {
    let id = req.params.id
    let user = req.body
    await DriverService.updateUser({id, user}, (result: any) => {
        res.send(result)

    })
};

// delete - delete = /users/{id}

export let deleteUser = async(req: Request, res: Response) => {
    let id = req.params.id
    await DriverService.deleteUser({id}, (result: any) => {
        res.send(result)
    })
};

// listar todos  - get - /users

export let listAllUser = async(req: Request, res: Response) => {
    await DriverService.listAllUser((result: any) => {
        res.send(result)
    })
};

// deleteByName - delete = /users/{id}

export let deleteUserByName = async(req: Request, res: Response) => {
    let name = req.params.name
    await DriverService.deleteUserByName({name}, (result: any) => {
        res.send(result)
    })
};