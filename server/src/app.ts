import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import { errorHandler } from "./middlewares/error-handler"
import { notFound } from "./middlewares/not-found"

export const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is on!' });
});

app.use(notFound)
app.use(errorHandler)