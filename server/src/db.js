const mongo = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/thc-cluster';

// Database Name
const dbName = 'thc-cluster';


/**
 * @function create
 * @description Create a new entry int he database
 * @param {array} arr - An arrary of objects to insert in to the array 
 * ex: [{name: 'jason'}]
 * @param {string} collectionName - the name of the collection in the database
 */
const create = (arr, collectionName) => {
  let conn;
  let db;

  mongo.connect(url)
    .then( connection => {
      conn = connection;
      db = conn.db(dbName);
      return db.collection(collectionName).insertMany(arr);
    })
    .then ( () => conn.close() )
    .catch( err => console.log(err) );

}

const read = (obj, collectionName) => {
  let conn;
  let db;

  mongo.connect(url)
    .then( connection => {
      conn = connection;
      db = conn.db(dbName);
      return db.collection(collectionName).find(obj).toArray();
    })
    .then ( results => console.log(results) )
    .then ( () => conn.close() )
    .catch( err => console.log(err) );

}

//create([{name: 'jason goebel'}], 'users')
read({}, 'users');