const express = require('express');
const db  = require ('./config/db');
const port = 3000;
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use('/', require('./router/index'));
app.listen(port, (error)=>{
    if(error){
        console.log(error);
    }else{
        console.log(`Server is running on ${port}`);
    }
})
