import mongoose from '../repository/db'

const companys = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }

    
})

export default mongoose.model('companys', companys)