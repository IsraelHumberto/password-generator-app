import React, {useEffect, useState, useContext} from 'react'
import { PasswordContext } from 'context/passwordContext'
import './style.scss'
const Checkboxs = () => {
    const {setQtdChecks, checks, setChecks} = useContext(PasswordContext)

    useEffect(() => {
        const qtd = Object.values(checks).filter(item => item).length

        switch(qtd) {
            case 2: setQtdChecks(2)
            break;
            case 3: setQtdChecks(3)
            break;
            case 4: setQtdChecks(4);
            break;
            default: setQtdChecks(1)
        }
    }, [checks, setQtdChecks])

  return (
    <form className='form'>
        <fieldset>
            <input type="checkbox" name="optionPassword" id="upper" checked={checks.upper} onChange={() => setChecks({...checks, upper: !checks.upper})}/>
            <label htmlFor="upper">Include Uppercase Letters</label>
        </fieldset>
        <fieldset>
            <input type="checkbox" name="optionPassword" id="lower" checked={checks.lower} onChange={() => setChecks({...checks, lower: !checks.lower})}/>
            <label htmlFor="lower">Include Lowercase Letters</label>
        </fieldset>
        <fieldset>
            <input type="checkbox" name="optionPassword" id="number" checked={checks.number} onChange={() => setChecks({...checks, number: !checks.number})}/>
            <label htmlFor="number">Include Numbers</label>
        </fieldset>
        <fieldset>
            <input type="checkbox" name="optionPassword" id="symbol" checked={checks.symbol} onChange={() => setChecks({...checks, symbol: !checks.symbol})}/>
            <label htmlFor="symbol">Include Symbols</label>
        </fieldset>
    </form>
  )
}

export default Checkboxs