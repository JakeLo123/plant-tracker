import React, { useState, useEffect } from 'react';
import { authorizeThunk } from '../../store/user';
import { connect } from 'react-redux';

const useValidation = (initialState, validate, authenticate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        authenticate();
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
  }

  return { handleChange, handleSubmit, handleBlur, values, errors, loading };
};

export default useValidation;
