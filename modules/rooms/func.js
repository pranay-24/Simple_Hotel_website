const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config()

let uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/?retryWrites=true&w=majority`
const client = new MongoClient(uri)
async function Connection(){
const db = client.db("testdb");

return db;

}
async function connection() {

    db = client.db("testdb");
    console.log('Connected to MongoDB Atlas');
    return db;
}

//  async function getAllLinks(){
// db = await connection();
// var results = db.collection("menuLinks").find({});
// var resultsArray = results.toArray();
// return resultsArray;

// }

async function getAllData(){
db = await connection();
var results = db.collection("hotelrooms").find({});
var resultsArray = results.toArray();
console.log(resultsArray)
//console.log(results)
return resultsArray;

}

module.exports = {getAllData}