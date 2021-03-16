import express from 'express';
// import cors from 'cors';
import routes from './routes';
import db from './repository/db'

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333);