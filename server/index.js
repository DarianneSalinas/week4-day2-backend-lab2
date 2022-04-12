const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//create variable that requires your controller file
const {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller')

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);           //'post'
app.put('/api/houses/:id', updateHouse);        //'Put' method updates existing content and requires a parameter after api
app.delete('/api/houses/:id', deleteHouse)      //'delete' method requires paramater as well





app.listen(4004, () => {console.log('Listening on port 4004')})