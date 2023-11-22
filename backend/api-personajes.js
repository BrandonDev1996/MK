const express = require('express');
const cors = require('cors');
const path = require('path'); // Asegúrate de importar 'path'
const app = express();
const port = 3000;

// Configura CORS para permitir solicitudes desde http://127.0.0.1:5500
const corsOptions = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200,
};

// Configura el middleware para permitir CORS
app.use(cors(corsOptions));

// Configura el middleware para servir archivos estáticos del frontend desde /static
app.use('/static', express.static(path.join(__dirname, 'frontend', 'dist')));

// Rutas de tu API
app.get('/api/characters', (req, res) => {
  // Lógica para obtener personajes
});

// Ruta principal sirve el archivo HTML del frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// Datos de ejemplo: Personajes de Mortal Kombat
const characters = [
  { id: 1, name: 'Scorpion', image: 'https://media.giphy.com/media/f8c3hKmua00KvTZQCd/giphy-downsized-large.gif' },
  { id: 2, name: 'Sub-Zero', image: 'https://media.giphy.com/media/KeKKaZduCbJo1vIBsa/giphy.gif' },
  // Agrega más personajes según sea necesario
];

// Ruta para obtener todos los personajes
app.get('/api/characters', (req, res) => {
  res.json(characters);
});

// Ruta para obtener un personaje por ID
app.get('/api/characters/:id', (req, res) => {
  const characterId = parseInt(req.params.id);
  const character = characters.find(c => c.id === characterId);

  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ error: 'Personaje no encontrado' });
  }
});

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
