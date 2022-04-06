import React, { useContext } from 'react'

import ControlledInput from '../../components/Input/ControlledInput';
import FormContext from '../../contexts/FormContext'
import { resetInputError, updateInputValue } from '../../reducer';

export default function TextInputContainer({
  name,
  ...props
}) {

  const [ state, dispatch ] = useContext(FormContext);

  const { values } = state;

  const inputValue = values[name];

  const onChange = (e) => {
    dispatch(updateInputValue({name, value: e.target.value}))
  }

  const onFocus = () => {
    dispatch(resetInputError({name}));
  }

  return (
    <ControlledInput 
      value={inputValue} 
      onChange={onChange}
      onFocus={onFocus}
      {...props} 
    />
  )
}
