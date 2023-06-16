const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Users {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
   
  }

  type Query {
    viewUsers: [Users]
  }

  `;

  module.exports = typeDefs;