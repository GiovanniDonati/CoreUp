import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is on!' });
});

export default app;