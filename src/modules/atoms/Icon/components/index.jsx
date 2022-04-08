import React from 'react'
import cn from 'classnames'

export default function Icon({
  name = '',
  size = 'sm',
  className = '',
  onClick
}) {

  const classNames = cn({
    [`icon-${name}`]: true,
    [`icon-size-${size}`]: true,
    [className]: true,
  })

  return (
    <i 
      className={classNames} 
      onClick={onClick} 
    />
  )
}
