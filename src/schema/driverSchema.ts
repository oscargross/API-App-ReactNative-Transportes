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
    
})

export default mongoose.model('drivers', drivers)