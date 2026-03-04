const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const MONGO_URL = "mongodb+srv://sangram2mail:Sangram%40001@cluster1.i7zdkpw.mongodb.net/?retryWrites=true&w=majority&appName=cluster1";

let _db;

const mongoConnect = (callback) => {    
    MongoClient.connect(MONGO_URL)
        .then(client => {
            console.log("Connected to MongoDB!");
            _db = client.db('database1'); // Store the database instance
            callback();
        })
        .catch(err => {
            console.error("MongoDB Connection Error:", err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw "No database found!";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;



