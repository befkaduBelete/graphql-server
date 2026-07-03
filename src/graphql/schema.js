import {
  GraphQLObjectType,
  GraphQLSchema,
} from "graphql";

import clientQueries from "./queries/clientQueries.js";
import projectQueries from "./queries/projectQueries.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",

  fields: {
    ...clientQueries,
    ...projectQueries,
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});