import React, { useEffect, useState } from "react";
import "./style.scss";

interface Props {
    qtdCheck: number
}

const StrengthLevel = ({qtdCheck}: Props) => {
    const [levelClass, setLevelClass] = useState<string[]>([''])

    useEffect(() => {
        switch(qtdCheck) {
            case 1: setLevelClass(['red', 'empty', 'empty', 'empty', 'too weak']) 
            break;
            case 2: setLevelClass(['orange', 'orange', 'empty', 'empty', 'weak']) 
            break;
            case 3: setLevelClass(['yellow', 'yellow', 'yellow', 'empty', 'medium']) 
            break;
            case 4: setLevelClass(['green', 'green', 'green', 'green', 'strong']) 
            break;
            default: setLevelClass(['empty', 'empty', 'empty', 'empty']) 
        }       
    }, [qtdCheck])
    
  return (
    <div className="strengthLevel"> 
        <p className="strengthLevel__title">Strength</p>
        <div className="strengthLevel__info">
            <span className="strengthLevel__label">{levelClass[4]}</span>
            <div className="strengthLevel__level">
                <div className={`strengthLevel__level--${levelClass[0]}`}></div>
                <div className={`strengthLevel__level--${levelClass[1]}`}></div>
                <div className={`strengthLevel__level--${levelClass[2]}`}></div>
                <div className={`strengthLevel__level--${levelClass[3]}`}></div>
            </div>
        </div>
    </div>
  )
}

export default StrengthLevel