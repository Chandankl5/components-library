import React from 'react'
import cn from 'classnames'

import Input from '../Input'

export default function Radio(props) {

  const classNames = cn(['input-radio'], {
    [props.className]: true
  })

  return (
    <Input type="radio" className={classNames} {...props} />
  )
}
