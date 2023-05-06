import {useState} from 'react'
import { PasswordContext } from "context/passwordContext";
import Button from "components/Button";
import InputRange from "components/InputRange";
import Output from "components/Output";
import StrengthLevel from "components/StrengthLevel";
import 'styles/app.scss'
import Checkboxs from 'components/Checkboxs';

function App() {
  const [charLength, setCharLength] = useState<number>(0)
  const [qtdChecks, setQtdChecks] = useState(1)
  const [checks, setChecks] = useState({
    upper: true,
    lower: false,
    number: false,
    symbol: false
})
  const [password, setPassword] = useState('')

  return (
    <PasswordContext.Provider value={{charLength, setCharLength, qtdChecks, setQtdChecks, checks, setChecks, password, setPassword}}>
      <div className='container'>
        <header>
          <Output />
        </header>
        <main>
          <InputRange min={0} max={20} title="Character Length" />
          <Checkboxs />
          <StrengthLevel qtdCheck={qtdChecks} />
          <Button text="generate" />
        </main>
      </div>
    </PasswordContext.Provider>
  );
}

export default App;
