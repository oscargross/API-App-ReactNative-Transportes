import mongoose from '../repository/db'

const transports = new mongoose.Schema({
addressTo: {
        lat: {
            type: String,
            required: true
        },
        lon: {
            type: String,
            required: true
        }
       
    },
    addressFrom: {
        lat: {
            type: String,
            required: true
        },
        lon: {
            type: String,
            required: true
        }       
    },

    openingDate:{
        type: Date,
        required: true
    },

    deliveryDate:{
      
        type: Date,
        required: true
    },

    valueNF:{
        type: Number,
        required: true
    },
    numberNF:{
        type: Number,
        required: true
    },

    priceTransport:{
        type: Number,
        required: true
    },

    volumes:[
        {
            weight: {
                type: Number,
                required: true
            },
            size:{
                type: String,
                required: true
            }

        }
    ],

    type:{
        type: String,
        required: true
    },

    signDelivery:{
        type: String,
        required: true
    }
    

})

export default mongoose.model('transports', transports)


// _id_Company
// 	endereço envio: {lat, lon}
// 	endereço chegada: {lat, lon}
// 	preço
// 	peso
// 	volumes
// 	tipoCarga:[]
// 	valorNF
// 	CTE
// 	numeroNF
// 	dataEntrega
// 	hrentrega
// 	dataAbertura
// 	hrabertura
// 	_id_driver
// 	documentoAssinado