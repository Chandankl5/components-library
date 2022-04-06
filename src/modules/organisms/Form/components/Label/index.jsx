import React from 'react'

export default function Label({
  htmlFor = '',
  className = '',
  ...props
}) {
  return (
    <label 
      htmlFor={htmlFor}
      className={className}
    >
      {props.children}
    </label>
  )
}
