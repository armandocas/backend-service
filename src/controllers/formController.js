import { db } from '../config/firebaseConfig.js';

export const submitForm = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).send('Todos os campos são obrigatórios.');
    }

    await db.collection('submissions').add({ name, email, phone, timestamp: new Date() });

    res.status(200).send('Dados salvos com sucesso!');
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    res.status(500).send('Erro ao salvar os dados.');
  }
};
