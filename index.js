const express =require('express');
const cors =require('cors');
const routes =require('./server/routes/routes');
const connect =require('./server/database/database');

const app=express();

// connection to database 
connect();

// url parsing 
app.use(express.json());


// cors
app.use(cors());

// routes connection 
app.use('/',routes)


// server connection 
app.listen(2500,()=>{
    console.log(`Connected to local server http://localhost:2500`)
})