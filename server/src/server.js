const express = require('express');
import db from './db';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/test', (req, res) => {
  const call = async () => await db.testConnection();
  res.send(call())
});
 
app.listen(port, () => console.log(`Listening on port ${port}`));
