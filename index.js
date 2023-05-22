// var express = require("express")
// var { graphqlHTTP } = require("express-graphql")
// var { buildSchema } = require("graphql")
// const cors = require('cors');
// const fetch = require('node-fetch');
// // import axios fro

// var schema2 = buildSchema(`
//   type User {
//     dob: String
//     first_name: String
//     last_name:String
//     representative_email:String
//   }

//   type Query {
//     author: [User]
//   }
// `)


// var root1 = {
//   author: async () => {
//     try {
//       const response = await fetch('http://localhost:3001/data', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email: 'tsizip@gmail.com' })
//       });
//       const data = await response.json();
//       // await console.log('data', data)
//       return data;
//     } catch (error) {
//       console.error(error);
//     }
//   },
// }

// var app = express()
// app.use(cors());
// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema2,
//     rootValue: root1,
//     graphiql: true,
//   })
// )
// app.listen(4000)
// console.log("Running a GraphQL API server at localhost:4000/graphql")


// henry web dev
// const express = require('express')
// const mysql = require('mysql2/promise');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { ApolloServer } = require('apollo-server-express')

// const port = 4001

// const typesDef = require('./schema/schema')
// const resolvers = require('./resolver/resolver')

// async function connectToMySQL() {
//   const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "Tsizip123",
//     database: "travelbooking_api"
//   });

//   return connection;
// }


// async function startServer() {
//   const server = new ApolloServer({
//     typeDefs: typesDef,
//     resolvers: resolvers,
//     context: async ()=>{
//       const connection = await connectToMySQL()
//       return {connection}
//     }
//   })
//   await server.start()
//   const app = express()

//   // mysql
//   app.use(bodyParser.json());
//   app.use(cors())
//   app.use(bodyParser.urlencoded({ extended: true }));



//   // connection.connect(function (err) {
//   //   // if (err) throw err;
//   //   if (err) {
//   //     console.error('Error connecting to database: ' + err.stack);
//   //     return;
//   //   }
//   //   console.log('Connected to database as id ' + connection.threadId);
//   // });

//   server.applyMiddleware({ app })


//   app.listen({ port }, () => {
//     console.log(`server ready at http://localhost:${port}${server.graphqlPath}`)
//   })

// }

// startServer()

// chatgpt

const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mysql = require('mysql2/promise');
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

async function connectToMySQL() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Tsizip123",
    database: "travelbooking_api"
  });

  return connection;
}

async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async () => {
      const connection = await connectToMySQL();
      return { connection };
    },
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));

  console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();