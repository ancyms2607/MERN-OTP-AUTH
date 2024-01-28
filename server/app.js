const express = require("express");
const morgan = require('morgan');

const route = require('./routes/routes');


const cors = require('cors');
require('dotenv').config();
require('./db/db');

const app = new express();
app.use(morgan('dev'));
app.use(express.json());

const path = require('path');
app.use(cors());

app.use('/api', route);


app.use(express.static(path.join(__dirname,'./build'))); 
app.get('/*', function(req, res) { 
    res.sendFile(path.join(__dirname ,'./build/index.html')); 
}); 

const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
