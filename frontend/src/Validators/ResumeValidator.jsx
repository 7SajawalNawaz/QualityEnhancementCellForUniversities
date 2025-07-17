const ResumeValidator = ({
  name,
  personal,
  experience,
  honor_awards,
  memberships,
  honor_students,
  service,
  brief_statement_of_research,
  publications,
  research_grants,
  other_research,
  selected_professional_presentation,
}) => {
  const errors = {
    name: "",
    personal: "",
    experience: "",
    honor_awards: "",
    memberships: "",
    honor_students: "",
    service: "",
    brief_statement_of_research: "",
    publications: "",
    research_grants: "",
    other_research: "",
    selected_professional_presentation: "",
  };

  if (!name) {
    errors.name = "name is required";
  }

  if (!personal) {
    errors.personal = "personal  is required";
  }

  if (!experience) {
    errors.experience = "experience  is required";
  }

  if (!honor_awards) {
    errors.honor_awards = "honor & awards  is required";
  }

  if (!memberships) {
    errors.memberships = "memberships  is required";
  }

  if (!honor_students) {
    errors.honor_students = "honor students  is required";
  }

  if (!service) {
    errors.service = "service  is required";
  }

  if (!brief_statement_of_research) {
    errors.brief_statement_of_research = "research  is required";
  }

  if (!publications) {
    errors.publications = "publications  is required";
  }

  if (!research_grants) {
    errors.research_grants = "grants  is required";
  }

  if (!other_research) {
    errors.other_research = "research  is required";
  }

  if (!selected_professional_presentation) {
    errors.selected_professional_presentation = "presentation  is required";
  }

  return errors;
};

export default ResumeValidator;
