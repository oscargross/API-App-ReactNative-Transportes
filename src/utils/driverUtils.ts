
export const findDriverParam = ({id, name}: any) => {

    const params = {_id: id, name}

    if(!params._id){
        delete params._id
    } 
    if(!params.name){
        delete params.name
    }
    return params

}