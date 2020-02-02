export default function validateAuth(values) {
  let errors = {};

  if (!values.username) {
    errors.username = 'username required';
  } else if (values.username.length < 3) {
    errors.username = 'username must be at least 3 characters';
  }

  if (!values.password) {
    errors.password = 'password required';
  } else if (values.password.length < 6) {
    errors.password = 'password must be at least 6 characters';
  }
  return errors;
}
