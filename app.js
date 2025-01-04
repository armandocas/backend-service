import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import formRoutes from './src/routes/formRoutes.js';

const app = express();

// app.use(cors()); Todas as rotas podem ser acessadas

app.use(cors({
    origin: [
        'https://landing-page-738owdtpb-thedjangocowboys-projects.vercel.app/api', // Origem do seu frontend
        'https://backend-service-wine.vercel.app/api', // Origem do backend (se necessário)
      ],
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
      allowedHeaders: ['Content-Type'], // Cabeçalhos permitidos
  }));
  

app.use(bodyParser.json());
app.use('/api', formRoutes);

export default app;
