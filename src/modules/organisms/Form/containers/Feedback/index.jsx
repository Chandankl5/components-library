import React, { useContext } from 'react'

import Feedback from '../../components/Feedback';
import FormContext from '../../contexts/FormContext';

export default function FeedbackContainer({
  name,
  ...props
}) {

  const [ state ] = useContext(FormContext);

  const { errors } = state;

  const errorValue = errors[name];

  if(!Boolean(errorValue)) {
    return null;
  }

  return (
    <Feedback 
      value={errorValue} 
      {...props} 
    />
  )
}
