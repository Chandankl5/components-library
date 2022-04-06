import cn from 'classnames'
import React from 'react'

export default function Button({
  type= 'button',
  variant = '',
  className = '',
  disabled = false,
  ...props
}) {

  const classNames = cn(['w-full', 'rounded-lg', 'p-4'],{
    [`bg-${variant}`]: true,
    [`border-${variant}`]: true,
    [className]: true,
  })

  return (
    <button
      className={classNames}
      type={type}
      disabled={disabled}
      style={{color: 'white'}}
    >
      {props.children}
    </button>
  )
}
