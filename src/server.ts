import 'reflect-metadata';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';


import './database';

const whitelist = ['https://panificadoraubaense.com.br', 'http://138.59.216.29' ]

var corsOptions = {
  origin: whitelist,
}
const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

dotenv.config();

app.listen(process.env.PORT || 3333, () => {
  console.log('Server started on port 3333!')
})