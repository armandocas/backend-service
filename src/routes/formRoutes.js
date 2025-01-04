import express from 'express';
import { submitForm } from '../controllers/formController.js';

const router = express.Router();

// Rota para o caminho raiz
router.get('/', (req, res) => {
  res.send('Bem-vindo ao Backend Service! A API está funcionando corretamente.');
});

// Rota para submissão do formulário
router.post('/submit', submitForm);

// Nova rota para obter todas as informações cadastradas
router.get('/data', getAllForms);

export default router;
