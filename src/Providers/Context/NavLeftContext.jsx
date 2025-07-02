import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";


export const NavLeftContext = createContext(null);
export const NavLeftProvider = ({children}) => {
    const tab = useLocation();
    const src = tab.pathname;
    const [indexSelect, setIndexSelect] = useState(src);
    return (
        <NavLeftContext.Provider value={{ indexSelect, setIndexSelect }}>
            {children}
        </NavLeftContext.Provider>
    )
}
export const useNavLeft = () => useContext(NavLeftContext);