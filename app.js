const express = require('express');
const app = express();
const PORT = 3000;
const knex = require('knex')(require('./knexfile')['development']);


app.use(express.json());

app.get('/', (req, res) => {
  res.send('it works!');
});

app.get('/movies', (req, res) => {
  knex
  .select('*')
  .from('movies')
  .then(data => res.status(200).json(data))
  .catch(err => res.status(404).json({message: 'The data you are looking for could not be found. Please try again'}));
});


app.listen(PORT, () => {
  console.log(`The Express server is running on port ${PORT}`);
});