const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const PORT = 5000
const app = express()

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => 'Hello world!',
}

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }),
)
app.listen(PORT)
console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`)