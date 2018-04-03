const express = require('express');
const mongo = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 5000;

// Connection URL
const url = 'mongodb://localhost:27017/thc-cluster';
// Database Name
const dbName = 'thc-cluster';
let conn;
let db;

app.get('/api/users', (req, res) => {
  db.collection('users')
    .find({})
    .toArray()
    .then( users => res.send(users) )
    .catch( err => res.send(err) );
})

app.post('/api/users', (req, res) => {

})

mongo.connect(url)
  .then( connection => {
    conn = connection;
    db = conn.db(dbName);
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch( err => console.log(err) );
