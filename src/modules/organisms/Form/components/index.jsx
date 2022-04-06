import React from 'react'
import PropTypes from 'prop-types';

export default function Form({
  id= '',
  name = '',
  className = '',
  ...props
}) {

  return (
    <form 
      id=""
      name={name}
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        props.onSubmit(e);
      }}
    >
      {props.children}
    </form>
  )
}

Form.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onSubmit: PropTypes.func
}