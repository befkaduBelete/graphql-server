import {
  GraphQLID,
  GraphQLList,
} from "graphql";

import ProjectType from "../types/ProjectType.js";
import { projects } from "../../server/sampleData.js";

const projectQueries = {
  projects: {
    type: new GraphQLList(ProjectType),

    resolve() {
      return projects;
    },
  },

  project: {
    type: ProjectType,

    args: {
      id: { type: GraphQLID },
    },

    resolve(parent, args) {
      return projects.find(
        (project) => project.id === args.id
      );
    },
  },
};

export default projectQueries;