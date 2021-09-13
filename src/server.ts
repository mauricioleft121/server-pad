import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';


import './database';

var corsOptions = {
  origin: 'https://panificadoraubaense.com.br/',
}
const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.use(routes);

dotenv.config();

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333!')
})