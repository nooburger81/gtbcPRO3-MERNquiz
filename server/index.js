const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
let server;

mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('Connected to DB!'))
.catch(er => console.log('Error connecting to mongoDB: ', er));

 server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});