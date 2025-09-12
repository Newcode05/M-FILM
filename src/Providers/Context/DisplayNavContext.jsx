import { createContext, useContext, useState } from "react";


export const DisplayNavContext = createContext(null);
export const DisplayNavProvider = ({ children }) => {
    const [displayNav, setDisplayNav] = useState(false);
    return (
        <DisplayNavContext.Provider value={{ displayNav, setDisplayNav }}>
            {children}
        </DisplayNavContext.Provider>
    )
}
export const useDisplayNav = () => useContext(DisplayNavContext);