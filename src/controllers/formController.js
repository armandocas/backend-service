import { db } from '../config/firebaseConfig.js';

// Controlador para salvar o formulário
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

// Controlador para buscar todos os formulários
export const getAllForms = async (req, res) => {
  try {
    const submissions = [];
    const snapshot = await db.collection('submissions').get();
    snapshot.forEach(doc => submissions.push({ id: doc.id, ...doc.data() }));
    res.status(200).json(submissions);
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    res.status(500).send('Erro ao buscar os dados.');
  }
};
