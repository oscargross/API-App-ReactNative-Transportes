import db from '../schema/DriverSchema'


// create - post - /users

export let createUser = async ({ user }: any, cb:any) => {
    try {       
        const newUsers = await new db( user )
   
        await newUsers.save((err: any, newUser: any) => {
            if(err) cb({error: err.message})
            cb(newUser)
       })

    } catch (error) {
        return { message: error }
    }
};

// read - get - /users:id
export let readUser = async ({ id }: any,  cb:any) => {
    try {
        await db.findById(id, (err: any, user: any) => {
            
            if(err) cb({error: err.message})
            cb(user)
        })
    } catch (error) {
        return { message: error }
    }
};

// update - post = /users:id

export let updateUser = ({ id, user }: any, cb: any) => {
  


    try {
        db.findByIdAndUpdate(id, { $set: user }, null, (err: any, userUpdated: any ) => {
            
            if(err) cb({error: err.message})
            userUpdated ? cb({message: "User Updated Successfully", oldRegisterUser: userUpdated}) : cb({message: "No user with this _id, it can't be updated"})  
            
        })
    } catch (error) {
        return { message: error }
    }


};

// delete - delete = /users:id

export let deleteUser = ({ id }: any, cb: any) => {
    try {
        db.findByIdAndRemove(id).exec((err: any, userDeleted: any)=>{
            if(err) cb({error: err.message})
            userDeleted ? cb({message: "User Deleted Successfully", user: userDeleted}) : cb({message: "No user with this _id"})  
            
            }); 
    } catch (error) {
        return { message: error }

    }
};

// listar todos  - get - /users

export let listAllUser = (cb: any) => {
    try {
        db.find({}, (err: any, users: any) => {
            if(err) cb({error: err.message})
            users ? cb(users) : cb({message: "No users"})
        })
    } catch (error) {
        return { message: error }

    }

};

export let deleteUserByName = ({name}: any, cb: any) => {
    try {
        db.collection.deleteMany( { "nome" : name } , (err: any, userDeleted: any) => {
            if(err) cb({error: err.message})
            userDeleted.result.n ? cb({message: "User Deleted Successfully"}) : cb({message: "No User with this doc"})
            
        });
        
    } catch (error) {
        return { message: error }

    }
}

