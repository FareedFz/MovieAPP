const express = require('express');
const app = express();
const body_parser = require('body-parser');
const router = require('./Routes/appRouter');
const dbConnection = require('./Config/database');
const port = process.env.PORT || 5200;
const mongoose = require("mongoose");
require('dotenv').config();

//   "mongodb://localhost:27017/newDB", 

console.log(process.env.Mongo_URL)
mongoose.connect(

  process.env.Mongo_URL,
  {

    useNewUrlParser: true

  },

//   err => {

//     if (!err) {

//       console.log("Connection succeeded");

//     } else {

//       console.log("Error in connection: " + err);

//     }

//   }

).then(()=>{
    console.log("MongoDB connected to atlas")
}).catch(error=>{
    console.log("something went wrong"+error)
})
let connection=mongoose.connection;
connection.on('open',function(){
    console.log("connected")
})

app.use(body_parser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

require('dotenv').config();



app.use('/',router)


app.listen(port,()=>{
    console.log("running on port on 5200" );
})
