import { createContext, useContext, useState } from "react"


export const DeviceContext = createContext(null);
export const DeviceProvider = ({ children }) => {
    const [isDevice, setIsDevice] = useState(null);
    return (
        <DeviceContext.Provider value={{ isDevice, setIsDevice }}>
            {children}
        </DeviceContext.Provider>
    )
}
export const useDevice = () => useContext(DeviceContext);