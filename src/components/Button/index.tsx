import React, {useContext} from 'react'
import './style.scss'
import { PasswordContext } from 'context/passwordContext'

interface Props {
    text?: String
    onclick?: () => void
}

const Button = ({text, onclick}: Props) => {
  const {charLength, checks, setPassword} = useContext(PasswordContext)

  const characters = {
    min: 'abcdefghijklmnopqrstuvwxyz',
    main: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '01234567890123456789',
    symbols: '!@#$%&*!@#$%&*'
  }

  let allCaracteres = ''

  function generatePassword() {
    if(checks.upper) {
        allCaracteres += characters.main
    }
    if(checks.lower) {
        allCaracteres += characters.min
    }
    if(checks.number) {
        allCaracteres += characters.numbers
    }
    if(checks.symbol) {
        allCaracteres += characters.symbols
    }

    const arrPassword = allCaracteres.split('')
    let passwordFinal = ''

    for(let i = 0; i < charLength; i++) {
        let random = Math.floor(Math.random() * arrPassword.length)
        passwordFinal += arrPassword[random]
    }

    setPassword(passwordFinal)

}

  return (
    <button className='btn' onClick={generatePassword}>
        {text ?? 'Button'}
        <span className='btn__icon'>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
        </span>
    </button>
  )
}

export default Button