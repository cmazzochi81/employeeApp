//A basic Express server creation template. 
//Run 'node server' to get this started.

const express = require('express');//Require Express. 
const bodyParser = require('body-parser');//Variable for body-parser npm installed.
const path = require('path');//to work with file and folder paths. 
const http = require('http');//need to create an http server. 
const app = express();//Bring in Express itself. 
const api = require('./server/routes/api');

// Setup parsers for hanlding incoming request data.
app.use(bodyParser.json());

//Tells the parser not to accept any nested objects.
app.use(bodyParser.urlencoded({ extended: false}));

//Telling Express to serve static files from Angular's distribution or 'dist' folder. 
app.use(express.static(path.join(__dirname, 'dist')));

//Send all non api routes to the 'dist/index.html' file. Where the Angular app itself resides.
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set port for server
const port = process.env.PORT || '3000';
app.set('port', port);

//create http server
const server = http.createServer(app);

//call server to listen and pass in the port
server.listen(port, () => console.log(
    `Well done Mazzo, you successfully started a server running on localhost:${port}`));