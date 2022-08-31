const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
const port = 3333

app.use(bodyParser.json())

//Allowing cross-origin  
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

fs.readdirSync(__dirname + "/routes").forEach((file) => {
    require(__dirname + "/routes/" + file)(app);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})