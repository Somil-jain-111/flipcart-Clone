import { createContext, useState } from 'react';

export const LoginContext = createContext(null);

const ContextProvider = ({children}) => {

    const [ account, setAccount1 ] = useState('');
    
    return (
        <LoginContext.Provider value={{ account, setAccount1 }}>
            {children}
        </LoginContext.Provider>
    )
}

export default ContextProvider;