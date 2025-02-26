const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Middleware
app.use(cors({ origin: '*' }));

app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres', // O nome do seu banco de dados
  password: 'Ryan.2007', // Substitua pela senha do seu PostgreSQL
  port: 5432,
});

// Pega todos os documentos
app.get('/documents', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM documents');
      res.json(result.rows);
    } catch (err) {
      console.error("Erro ao buscar documentos:", err); // Adiciona mais detalhes
      res.status(500).send('Server error');
    }
  });
  

// Deleta docs pelo ID
app.delete('/documents/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM documents WHERE id = $1 RETURNING *', [id]);
      if (result.rowCount === 0) {
        return res.status(404).send('Document not found');
      }
      res.json({ message: 'Document deleted', deletedDocument: result.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });
  


// Add novo documento
app.post('/documents', async (req, res) => {
  const { title } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO documents (title, created_at) VALUES ($1, NOW()) RETURNING *',
      [title]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// começa o servidor

app.get('/', (req, res) => {
    res.send('Servidor está rodando! 🚀');
  });
  
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
