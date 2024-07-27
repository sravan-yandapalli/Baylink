import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  emailId: Yup.string()
    .email("Invalid email") // Checks for valid email format
    .required("EmailId Is Required"), // Required field message
  password: Yup.string()
    .min(5, "Too Short!") // Minimum length of 5 characters
    .max(50, "Too Long!") // Maximum length of 50 characters
    .required("Password Is Required"), // Required field message
});
