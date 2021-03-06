const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 3001;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
 
app.listen( PORT )