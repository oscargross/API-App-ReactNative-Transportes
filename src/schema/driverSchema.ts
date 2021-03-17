import mongoose from '../repository/db'

const drivers = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    clt:{
        type: String,
        required: true
    }
    
})
const driver = mongoose.model('drivers', drivers)
export default driver

