# nodejs
sample node js

Database Interacation in Web Applications
This demonstrates the cconnection of MySQL database and Node.js to create a simple API

Requirements
Node.js installed
MySQL installed and running
A code editor, like Visual Studio Code
Setup
Clone the repository

Initialize the node.js environment

npm init -y
Install the necessary dependancies

npm install express mysql2 dotenv nodemon
Create a server.js and .env files

Basic server.js setup

const express = require('express')
const app = express()


// Question 1 goes here


// Question 2 goes here


// Question 3 goes here


// Question 4 goes here



// listen to the server
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server is runnig on http://localhost:${PORT}`)
})



Run the server
nodemon server.js



Setup the .env file
DB_USERNAME=root
DB_HOST=localhost
DB_PASSWORD=your_password
DB_NAME=hospital_db



Configure the database connection and test the connection
Configure the server.js file to access the credentials in the .env to use them in the database connection
