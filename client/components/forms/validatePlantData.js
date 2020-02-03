export default function(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'name is required';
  } else if (values.name < 3) {
    errors.name = 'name must be at least 3 characters';
  }

  if (!values.waterAfter) {
    errors.waterAfter = 'watering interval is required';
  } else if (values.waterAfter < 1) {
    errors.waterAfter = 'watering interval must be at least 1';
  }

  return errors;
}
