import React from 'react';
import cn from 'classnames'

export default function Flex({
  direction = 'row',
  wrap = 'nowrap',
  justifyContent = 'flex-start',
  alignItems = 'stretch',
  rowGap = 0,
  columnGap = 0,
  gap = 0,
  className = '',
  ...props
}) {

  const classNames = cn(['flex'], {
    [`flex-${direction}`]: true,
    [`flex-${wrap}`]: true,
    [`justify-${justifyContent}`]: true,
    [`items-${alignItems}`]: true,
    [`gap-y-${rowGap}`]: true,
    [`gap-x-${columnGap}`]: true,
    [`gap-${gap}`]: true,
    [className]: true,
  })

  return (
    <div className={classNames}>
      {props.children}
    </div>
  )
}
