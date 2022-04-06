import React from 'react'
import cn from 'classnames'

export default function Column({
  width = 'auto',
  grow = 0,
  shrink = 1,
  order = 0,
  alignSelf = ' auto',
  ...props
}) {

  const columnWidth = width === 'auto' ? 'flex-auto' : `w-${width}`;

  const classNames = cn({
    [grow === 0 ? 'grow-0' : 'grow']: true,
    [shrink === 0 ? 'shrink-0': 'shrink']: true,
    [`order-${order}`]: true,
    [`self-${alignSelf}`]: true,
    [columnWidth]: true,
    // ['w-9']: true
  })

  return (
    <div className={classNames} >
      {props.children}
    </div>
  )
}
