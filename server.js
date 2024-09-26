const express = require("express")
const app = express()
const mysql = require('mysql2');
const dotenv = require('dotenv')

//configure environment variables
dotenv.config();

//create a connection object

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

//test db conncection

db.connect((err) => {
    //  connection is not successful
    if(err) return console.log("Error connecting to the database", err);

    //connection was successful
    console.log("Connected to database as id: ", db.threadId); 
}) 



//ejs part

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//retrieve all patients
app.get('', (req, res)=>{
    const getPatients = "SELECT patient_id, first_name, last_name FROM patients"
    db.query(getPatients, (err, data) => {
      if(err) {
        return res.status(400).send("Failed to get Patients", err)
      } else{
res.status(200).render('data', {data: data});
}
});
});





//start and listen to server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})