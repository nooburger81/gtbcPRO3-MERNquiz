const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const models = require('./models/Users');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
let server;

//middleware config

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));
app.use(bodyParser.json({ limit: '20mb' }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mernquiz-app', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('Connected to DB!'))
.catch(er => console.log('Error connecting to mongoDB: ', er));

 server = app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});