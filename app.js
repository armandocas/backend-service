import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import formRoutes from './src/routes/formRoutes.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', formRoutes);

export default app;
