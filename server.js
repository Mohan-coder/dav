const express = require('express')
const app = express()
const cors = require("cors")
const router = require('./routes/employeedata')
require('dotenv').config()

app.use(cors());
app.use(express.json())
app.use('/api',router)
app.use("/uploads", express.static("./uploads")); 


const dbconnect = require('./config/dbconnection');
dbconnect(); 

const port = process.env.PORT || 4000;
app.listen(port,  ()=> { 
  console.log(`server running at port ${port} `)
});  