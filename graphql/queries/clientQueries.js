import { GraphQLID, GraphQLList } from "graphql";
import { clients } from "../../server/sampleData.js";
import ClientType from "../types/ClientType.js"; 

const clientQueries = {
  clients: {
    type: new GraphQLList(ClientType),
    resolve(parent, args) {
      return clients;
    },
  },
  client: {
    type: ClientType,
    args: {
      id: { type: GraphQLID },
    },
    resolve(parent, args) {
      return clients.find((client) => client.id === args.id);
    },
  },
};

export default clientQueries;
