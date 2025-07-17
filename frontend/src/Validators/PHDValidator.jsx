const PHDValidator = ({
  name,
  degree_title,
  doa,
  doc,
  thesis_title,
  supervisor,
}) => {
  const errors = {};

  if (!name) {
    errors.name = "name is required";
  }

  if (!degree_title) {
    errors.degree_title = "degree title  is required";
  }

  if (!doa) {
    errors.doa = "date of admission  is required";
  }

  if (!doc) {
    errors.doc = "date of completion  is required";
  }

  if (!thesis_title) {
    errors.thesis_title = "thises title  is required";
  }

  if (!supervisor) {
    errors.supervisor = "supervisor name  is required";
  }

  return errors;
};

export default PHDValidator;
