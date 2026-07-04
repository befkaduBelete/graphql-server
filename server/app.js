import express from "express";
import dotenv from "dotenv";
import { graphqlHTTP } from "express-graphql";
import  {buildSchema } from  "graphql"
import cors from "cors"


dotenv.config();
const PORT  = process.env.PORT || 6000

const app  = express();


// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: process.env.NODE_ENV ==="development",
}));


app.listen(PORT, ()=>{
 console.log(`SERVER RUN AT PORT ${PORT}`)
})