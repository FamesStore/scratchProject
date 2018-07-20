const express = require('express');
const app = express();
const database = express();
const http = require('http');
const databaseServer = http.createServer(database);
//const eventCtrl = require('./controllers/event-controller');

app.use(express.static(__dirname +'./../')); //serves the index.html
app.listen(4000, () => {
  console.log('listening at http://localhost:4000')
}); //listens on port 3000 -> http://localhost:3000/


database.get('/', (req, res) => {
  console.log('DATABSE GET IS WORKING')
  res.send('GET DATABASE IS WORKING')
})

databaseServer.listen(8080, () => {
  console.log('listening at http://localhost:8080');
});

module.exports = databaseServer;
