import mongoose from 'mongoose'
import {config as dotenv} from 'dotenv'

dotenv()

mongoose.connect(`${process.env.MONGO_URL_CONNECTION_BD_DEV}` , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
).then(result => console.warn("Database connection sucessfull"))
  .catch((err) => console.error(err.message));

export default mongoose;