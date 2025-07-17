const isEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^(?!.*\.\.)(?!.*\.$)[\w\.-]{1,64}@[a-zA-Z\d-]+(\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,}$/) !== null;
};


const LoginValidator = ({email, password}) => {
  const errors = {

    email: "",
    password: "",

  };

 
  if (!email) {
    errors.email = "Email is required";
  } 
  else if (!isEmail(email)) {
    errors.email = "Inavlid email";
  }

  if (!password) {
    errors.password = "Enter the password";
  } 
  
  return errors;
};

export default LoginValidator;