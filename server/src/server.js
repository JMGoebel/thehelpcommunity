const express = require('express');
const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
const app = express();
const port = process.env.PORT || 5000;

// Connection URL
const url = 'mongodb://localhost:27017/thc-cluster';
// Database Name
const dbName = 'thc-cluster';
let conn;
let db;

app.use(express.json());

// CREATE
app.post('/api/create', (req, res) => {
  db.collection(req.body.collection)
    .insertOne(req.body.data)
    .catch( err => console.log(err) )
})

// READ
app.post('/api/read', (req, res) => {
  db.collection(req.body.collection)
    .find({})
    .filter(req.body.filter || {})
    .toArray()
    .then( users => res.send(users) )
    .catch( err => res.send(err) );
})

// UPDATE
app.post('/api/update', (req, res) => {
  db.collection(req.body.collection)
    .updateOne(req.body.data, {$set: req.body.newData || req.body.data})
    .catch( err => console.log(err) )
})

// DELETE
app.post('/api/delete', (req, res) => {
  db.collection(req.body.collection)
    .deleteOne({"_id": ObjectID("5ac41fb8afebe9dc312c0f8a")})
    .catch( err => console.log(err) )
})

// CONNECT TO DATABASE
mongo.connect(url)
  .then( connection => {
    conn = connection;
    db = conn.db(dbName);
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch( err => console.log(err) );
