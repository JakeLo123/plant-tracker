import React, { useState, useEffect } from 'react';
import { authorizeThunk } from '../../store/user';
import { connect } from 'react-redux';

const useValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log('authenticated...', values.username, values.password);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    console.log('authenticated...', values.username, values.password);
    setErrors(validationErrors);
    setLoading(true);
    // props.authorize({ username, password }, method);
  }

  return { handleChange, handleSubmit, handleBlur, values, errors, loading };
};

// const mapDispatch = dispatch => ({
//   authorize: (formData, method) => {
//     dispatch(authorizeThunk(formData, method));
//   },
// });

// export default connect(null, mapDispatch)(useValidation);
export default useValidation;
