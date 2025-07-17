const isEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(?!.*\.\.)(?!.*\.$)[\w\.-]{1,64}@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,}$/) !== null;
};


const SignupValidator = ({ name, email, password, confirmpassword }) => {
  const errors = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  if (!name) {
    errors.name = "Name is required";
  }
  if (!email) {
    errors.email = "Email is required";
  } 
  else if (!isEmail(email)) {
    errors.email = "Inavlid email";
  }

  if (!password) {
    errors.password = "Enter the password";
  } else if (password.length < 6) {
    errors.password = "Password must be 6 character long";
  }
  if (password !== confirmpassword) {
    errors.confirmpassword = "Password doesn't match";
  }

  return errors;
};

export default SignupValidator;