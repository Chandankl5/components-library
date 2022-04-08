import cn from 'classnames'
import React from 'react'

import './Button.css'

export default function Button({
  type= 'button',
  variant = '',
  size = 'sm',
  className = '',
  disabled = false,
  ...props
}) {

  const textColor = variant === 'white' ? 'black' : 'white';

  const classNames = cn(['rounded-lg'],{
    [`bg-${variant}`]: true,
    [`border-${variant}`]: true,
    [`button-${size}`]: true,
    [className]: true,
  })

  return (
    <button
      className={classNames}
      type={type}
      disabled={disabled}
      style={{color: textColor}}
    >
      {props.children}
    </button>
  )
}
