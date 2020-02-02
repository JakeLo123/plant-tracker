import React, { useState } from 'react';

const useValidation = initialState => {
  const [values, setValues] = useState(initialState);

  function handleChange(event) {
    console.log('target name...', event.target.name);
    console.log('target value...', event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  return { handleChange, values };
};

export default useValidation;
