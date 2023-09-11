const express = require('express');
const app = express();

const conexion = require('./src/database/db'); 

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(express.json));

app.use('/', require('./router'));

app.listen(5000,()=>{
    console.log("funcionando en puerto 5000");
})