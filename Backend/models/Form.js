const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    updatedBy: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    personal: { type: String },
    experience: { type: String },
    honor_awards: { type: String },
    memberships: { type: String },
    honor_students: { type: String },
    service: { type: String },
    brief_statement_of_research: { type: String },
    publications: { type: String },
    research_grants: { type: String },
    other_research: { type: String },
    selected_professional_presentation: { type: String },
  },
  { timestamps: true }
);

const Form = mongoose.model("form", formSchema);
module.exports = Form;
