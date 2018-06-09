const express = require('express');
const bodyParser = require('body-parser');

const app = express();

require('./app_api/models/db');

var indexApi = require('./app_api/routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexApi);

app.listen(3000, () => {
    console.log("Server is listening on 3000...")
});