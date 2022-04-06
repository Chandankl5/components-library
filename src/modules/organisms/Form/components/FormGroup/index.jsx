import React from 'react';
import PropTypes from 'prop-types';

export default function FormGroup({
  className = '',
  ...props
}) {
  return (
    <div className="mt-4">
      {props.children}
    </div>
  )
}

FormGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}