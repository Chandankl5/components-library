import React from 'react'

export default function Input({
  id = '',
  name = '',
  type = '',
  placeholder = '',
  className = '',
  onChange,
  onFocus,
  disabled = false,
  required = false
}) {
  return (
    <input 
      type={type} 
      id={id} 
      name={name}
      placeholder={placeholder} 
      className={className} 
      onChange={onChange}
      onFocus={onFocus}
      style={{width: '100%'}}
      disabled={disabled}
      required={required}
    />
  )
}