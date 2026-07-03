import {
  GraphQLID,
  GraphQLList,
} from "graphql";

import ClientType from "../types/ClientType.js";
import { clients } from "../../server/sampleData.js";

const clientQueries = {
  clients: {
    type: new GraphQLList(ClientType),

    resolve() {
      return clients;
    },
  },

  client: {
    type: ClientType,

    args: {
      id: { type: GraphQLID },
    },

    resolve(parent, args) {
      return clients.find(
        (client) => client.id === args.id
      );
    },
  },
};

export default clientQueries;