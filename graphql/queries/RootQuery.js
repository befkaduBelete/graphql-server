import { GraphQLID, GraphQLList, GraphQLObjectType } from "graphql";
import { clients, projects } from "../../server/sampleData.js";
import ClientType from "../types/ClientType.js";
import ProjectType from "../types/ProjectType.js";
import clientQueries from "./clientQueries.js";
import projectQueries from "./projectQueries.js";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
   ...clientQueries,
   ...projectQueries
  },
});

export default RootQuery;
