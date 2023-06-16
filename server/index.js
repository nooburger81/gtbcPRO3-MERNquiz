const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const models = require('./models/Users');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('/Users/maeven/Desktop/gtbcPRO3-MERNquiz/server/schema');
require('dotenv').config();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers 
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;
const startApolloServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
};
let server;

//middleware config

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));
// app.use(bodyParser.json({ limit: '20mb' }));

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

startApolloServer();