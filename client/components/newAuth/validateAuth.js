export default function validateAuth(values) {
  let errors = {};

  // username errors
  if (!values.username) {
    errors.username = 'username required';
  } else if (values.username.length < 3) {
    errors.username = 'username must be at least 3 characters';
  }

  // password validators
  if (!values.password) {
    errors.password = 'password required';
  } else if (values.password.length < 6) {
    errors.password = 'password must be at least 6 characters';
  }
  return errors;
}
