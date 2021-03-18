
export let create = async ({ driver }: any, Schema : any) => {
    try {
        console.log(driver)
        Schema.create(
            driver
        );
        return driver
    } catch (error) {
        return { message: error.message }
    }
};

export let readAll = async (Schema : any) => {
    try {
        const allDrivers = await  Schema.find({}).catch( (err: any) => {
            console.log(err);
            throw new Error("Some Error Happened ");
            
        })
        return allDrivers
        
    } catch (error) {
        return { message: error.message }
    }
};

export let findByParam = async ({ param }: any, Schema : any) => {
    try {
        const driver = await Schema.findOne({param}).catch( (err: any) => {
            console.log(err);
            throw new Error("Some Error Happened ");
            
        })
        return driver
    
        
    } catch (error) {
        return { message: error.message }
    }
};


export let update = ({id, info}: any, Schema : any) => {

    try {
        const driver = Schema.findByIdAndUpdate({id}, {
            $set: {info}
        }).catch( (err: any) => {
            console.log(err);
            throw new Error("Some Error Happened ");
            
        })
        return driver

    } catch (error) {
        return { message: error.message }
    }


};

export let del = async ({ id }: any, Schema : any) => {
    try {
        const driverDeleted = await Schema.findByIdAndDelete({id}).catch( (err: any) => {
            console.log(err);
            throw new Error("Some Error Happened");
            
        })
        return driverDeleted
    
        
    } catch (error) {
        return { message: error.message }
    }
};