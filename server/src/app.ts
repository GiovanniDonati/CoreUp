import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import { errorHandler } from "./middlewares/error-handler"
import { notFound } from "./middlewares/not-found"
import { RootRoutes } from "./routes"

export const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());

app.use('/api/v1', RootRoutes)

app.use(notFound)
app.use(errorHandler)