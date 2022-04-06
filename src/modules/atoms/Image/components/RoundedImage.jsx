import React from 'react'
import cn from 'classnames'

import Image from './index'

export default function RoundedImage({className, ...props}) {

  const classNames = cn(['img-rounded', 'rounded-full'], {
    [className]: true
  })

  return (
    <Image
      className={classNames}
      {...props}
    />
  )
}
