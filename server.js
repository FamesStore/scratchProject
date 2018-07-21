const express = require('express');
const app = express();
const path = require('path');
const database = express();
const http = require('http');
const dbController = require('./controller.js');
const bodyParser = require('body-parser');
//const eventCtrl = require('./controllers/event-controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static(__dirname +'./index.html')); //serves the index.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname +'/index.html'));
})
app.listen(5000, () => {
 console.log('listening at http://localhost:5000')
}); //listens on port 3000 -> http://localhost:3000/

app.post("/addUser", dbController.createUser, (req, res) => {
	res.sendFile(path.join(__dirname + '/items.html'));
});

app.post("/addItem", dbController.createItem, dbController.getAllItems);

// app.post("/addItem", (req, res) => {
// 	res.sendFile(path.join(__dirname + '/indexREACT.html'))
// })
