import mongoose from 'mongoose'
import {config as dotenv} from 'dotenv'

dotenv()
 console.log(process.env.MONGO_URL_CONNECTION+"")
// mongoose.connect(process.env.MONGO_URL_CONNECTION+"" , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

export default mongoose;