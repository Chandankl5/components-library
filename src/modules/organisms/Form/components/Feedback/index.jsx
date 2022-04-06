import React from 'react'

export default function Feedback({
  id = '',
  value = '',
  className = '',
  children
}) {

  let component = null;

  if(children) {
    component = children;
  }
  else {
    component = <p id={id} className='text-red-600'>{value}</p>
  }

  return component;
}
