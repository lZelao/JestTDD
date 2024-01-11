let express = require('express')
let app = express();
let mongoose = require('mongoose');

app.use(express.urlencoded({ extended:false }));
app.use(express.json());

app.get('/', (req, res)=>{

    res.json({});

})
module.exports = app;
