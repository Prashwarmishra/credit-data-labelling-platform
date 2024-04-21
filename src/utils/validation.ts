export const validateEmail = (email: string) => {
  let out = {
    isValid: true,
    errorMessage: "",
  };
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email.trim())) {
    out = {
      isValid: false,
      errorMessage: "Please enter a valid email address",
    };
  }
  return out;
};

export const validatePassword = (password: string) => {
  let out = {
    isValid: true,
    errorMessage: "",
  };
  if (!password.trim()) {
    out = {
      isValid: false,
      errorMessage: "Please enter a valid password",
    };
  }
  return out;
};
