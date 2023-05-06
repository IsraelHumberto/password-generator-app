import { createContext } from 'react'

type ChecksType = {
    upper: boolean;
    lower: boolean;
    number: boolean;
    symbol: boolean;
}

interface IMenuContext {
    charLength: number;
    setCharLength: React.Dispatch<React.SetStateAction<number>>;
    qtdChecks: number;
    setQtdChecks: React.Dispatch<React.SetStateAction<number>>;
    checks: ChecksType;
    setChecks: React.Dispatch<React.SetStateAction<ChecksType>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>
  }
  
export const PasswordContext = createContext<IMenuContext>({
        charLength: 0,
        setCharLength: ()=> {},
        qtdChecks: 1,
        setQtdChecks: ()=> {},
        checks: {
          upper: false,
          lower: false,
          number: false,
          symbol: false
        },
        setChecks: () => {},
        password: '',
        setPassword: () => {}
    }
)