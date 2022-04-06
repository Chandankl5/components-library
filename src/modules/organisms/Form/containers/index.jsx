import React from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';

import Label from '../components/Label';
import ControlledInput from './Input/ControlledInput'
import FormGroup from '../components/FormGroup'
import Form from '../components';
import Feedback from './Feedback';

import FormContext from '../contexts/FormContext';
import formReducer, { updateInputErrors } from '../reducer';
import formatValidationErrors from '../utils/FormatValidationErrors';
import Radio from '../components/Radio';

/* 
initialValues example,
{
  name: '',
  phone: '',
  city: ''
}
*/

export default function FormContainer({
  initialValues = {},
  initialErrors = {},
  validateOnSubmit = false,
  validationSchema,
  submitHandler,
  ...props
}) {

  const initialState = { values: initialValues, errors: initialErrors };

  const [ state, dispatch ] = useImmerReducer(formReducer, initialState);

  const { values } = state;

  const onSubmit = (e) => {

    if(validateOnSubmit && validationSchema) {
      console.log('---values', values)
      validationSchema.validate(values, { abortEarly: false })
        .then(() => {
          submitHandler({event: e, values})
        })
        .catch((err) => {
          const errors = formatValidationErrors(err.inner);
          dispatch(updateInputErrors(errors));
        })
    }
  }

  return (
    <FormContext.Provider value={[state, dispatch]}>
      <Form {...props} onSubmit={onSubmit} />
    </FormContext.Provider>
  )

}


FormContainer.Group = FormGroup;
FormContainer.Input = ControlledInput;
FormContainer.Label = Label;
FormContainer.Feedback = Feedback;
FormContainer.radio = Radio;

FormContainer.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  validateOnSubmit: PropTypes.bool,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object.isRequired,
  initialErrors: PropTypes.object
}

