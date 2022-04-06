import React from 'react'

export default function Image({
  src = '',
  alt = '',
  width = 0,
  height = 0,
  className = ''
}) {
  return (
    <img 
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    /> 
  )
}
