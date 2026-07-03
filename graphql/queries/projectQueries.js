import { GraphQLID, GraphQLList } from "graphql";
import { projects } from "../../server/sampleData.js";
import ProjectType from "../types/ProjectType.js";


// Hamle-11
// hamle -1

const projectQueries = {
  projects: {
    type: new GraphQLList(ProjectType),
    resolve(parent, args) {
      return projects;
    },
  },
  project: {
    type: ProjectType,
    args: {
      id: { type: GraphQLID },
    },
    resolve(parent, args) {
      return projects.find((project) => project.id === args.id);
    },
  },
};

export default projectQueries;
