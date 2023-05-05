import React from 'react'
import './style.scss'

interface Props {
    text?: String
    onclick?: () => void
}

const Button = ({text, onclick}: Props) => {
  return (
    <button className='btn' onClick={onclick}>
        {text ?? 'Button'}
        <span className='icon'>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
        </span>
    </button>
  )
}

export default Button