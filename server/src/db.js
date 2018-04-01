const mongo = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017/thc-cluster';

// Database Name
const dbName = 'thc-cluster';

const connect = () => {
  mongo.connect(url, (err, client) => {
    if (err) throw err;
    console.log("Connected");
    let db = client.db(dbName);
    client.close();
  })
}

connect();