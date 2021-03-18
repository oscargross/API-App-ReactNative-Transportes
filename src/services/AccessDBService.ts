
export let create = async (info : any, Schema : any) => {
    
    try {
        await Schema.create(
            info
        ).catch( (err: any) => {
            throw new Error(err); 
        })
        return info
    } catch (error) {
        console.log("Error: "+error.message)
        return { message: error.message }
    }
};

export let readAll = async (Schema : any) => {
    try {
        const allDrivers = await  Schema.find({}).catch( (err: any) => {
            throw new Error(err);  
            
        })
        return allDrivers
        
    } catch (error) {
        console.log("Error: "+error.message)
        return { message: error.message }
    }
};

export let findByParam = async (param : any, Schema : any) => {
    try {
        const driver = await Schema.findOne(param).catch( (err: any) => {
            throw new Error(err); 

        })
        return driver
    
        
    } catch (error) {
        console.log("Error: "+error.message)
        return { message: error.message }
    }
};


export let update = async (id: any , info: any, Schema : any) => {

    try {
        const driver = await Schema.findByIdAndUpdate(id, {
            $set: info
        }).catch( (err: any) => {
            throw new Error(err); 
            
        })
        return driver

    } catch (error) {
        console.log("Error: "+error.message)
        return { message: error.message }
    }


};

export let del = async ( id : any, Schema : any) => {
    try {
        const driverDeleted = await Schema.findByIdAndDelete(id).catch( (err: any) => {
            throw new Error(err); 

        })
        return driverDeleted
    
        
    } catch (error) {
        console.log("Error: "+error.message)
        return { message: error.message }
    }
};