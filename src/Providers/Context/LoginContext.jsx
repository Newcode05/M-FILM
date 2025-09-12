import { createContext, useContext, useState } from "react";


export const LogInContext = createContext(null);
export const LogInProvider = ({ children }) => {
    const [login, setLogin] = useState(false);
    return (
        <LogInContext.Provider value={{ login, setLogin }}>
            {children}
        </LogInContext.Provider >
    )
}
export const useLogIn= () => useContext(LogInContext);