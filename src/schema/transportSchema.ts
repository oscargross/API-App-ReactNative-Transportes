import mongoose from '../repository/db'

const transports = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    },

})

export default mongoose.model('transports', transports)

Date.now()