import driverSchema from '../schema/driverSchema'
import driver from '../schema/driverSchema';


export let createDriver = async ({ driver }: any) => {
    try {
        console.log(driver)
        driverSchema.create(
            driver
        );
        return driver
    } catch (error) {
        return { message: error }
    }
};

export let readAllDrivers = async () => {
    try {
        const allDrivers = await  driverSchema.find({}).catch( (err: any) => {
            console.log(err);
            throw new Error("Some Error Happened ");
            
        })
        return allDrivers
        
    } catch (error) {
        return { message: error.message }
    }
};

export let findDriverByParam = async ({ param }: any) => {
    try {
        const driver = await driverSchema.findOne({param}).catch( (err: any) => {
            console.log(err);
            throw new Error("Some Error Happened ");
            
        })
        return driver
    
        
    } catch (error) {
        return { message: error.message }
    }
};


export let updateDriver = ({id, info}: any) => {

    try {
        const driver = driverSchema.findByIdAndUpdate({id}, {
            $set: {info}
        }).catch( (err: any) => {
            console.log(err);
            throw new Error("Some Error Happened ");
            
        })
        return driver

    } catch (error) {
        return { message: error }
    }


};

export let deleteDriver = async ({ id }: any) => {
    try {
        const driverDeleted = await driverSchema.findByIdAndDelete({id}).catch( (err: any) => {
            console.log(err);
            throw new Error("Some Error Happened");
            
        })
        return driverDeleted
    
        
    } catch (error) {
        return { message: error.message }
    }
};