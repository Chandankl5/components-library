import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import Input from '.'

export default function ControlledInput(props) {

  const { type } = props;

  const classNames = cn(['input-control'], {
    [props.className]: true
  })

  return (
    <Input type={type} className={classNames} {...props} />
  )
}

ControlledInput.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'phone', 'email', 'search', 'tel'])
}