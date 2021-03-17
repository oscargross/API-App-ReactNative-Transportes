import driverSchema from '../schema/driverSchema'

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

export let findDriversby = async () => {
    try {
        const newRenatinho = await driverSchema.findOne({name: ""})
        const Renatinho = await  driverSchema.find({}).catch( (err: any) => {
            console.log(err);
            throw new Error("Teu cu");
            
        })
           




        driverSchema.find({}, (err, doc) => {
            console.log(doc)
            return doc;
        })
        
    } catch (error) {
        return { message: error.message }
    }
};




export let readAllDrivers = async () => {
    try {
        const newRenatinho = await driverSchema.findOne({name: ""})
        const Renatinho = await  driverSchema.find({}).catch( (err: any) => {
            console.log(err);
            throw new Error("Teu cu");
            
        })
           




        driverSchema.find({}, (err, doc) => {
            console.log(doc)
            return doc;
        })
        
    } catch (error) {
        return { message: error.message }
    }
};


export let updateDriver = ({ id }: any, {changes}: any) => {

    try {
        driverSchema.findByIdAndUpdate({id}, {
            $set: {changes}
        })
        return {messege: "ok"}

    } catch (error) {
        return { message: error }
    }


};
