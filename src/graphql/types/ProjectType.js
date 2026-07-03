import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import ClientType from "./ClientType.js";
import { clients } from "../../server/sampleData.js";

const ProjectType = new GraphQLObjectType({
  name: "Project",

  fields: () => ({
    id: { type: GraphQLID },

    client: {
      type: ClientType,

      resolve(parent) {
        return clients.find(
          (client) => client.id === parent.clientId
        );
      },
    },

    name: { type: GraphQLString },

    description: {
      type: GraphQLString,
    },

    status: {
      type: GraphQLString,
    },
  }),
});

export default ProjectType;