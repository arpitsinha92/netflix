export const checkValidateData = (email, name, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
const nameRegex = /^[a-zA-Z\s]+$/; 
    if (name !== null && !nameRegex.test(name)) {
    return "Name can only contain letters and spaces.";
    }
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);

  if (!isValidEmail) return "Invalid email format.";
  if (!isValidPassword)
    return "Password must be at least 8 characters long and contain at least one letter, one number and no special characters.";

  return null;
};
