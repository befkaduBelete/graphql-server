import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    default: "Not Started",
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
});

export const Project = mongoose.model("Project", ProjectSchema);
