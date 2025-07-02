import { createContext, useContext, useState } from "react";


export const LoadingContext = createContext(null);
export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}
export const useLoading = () => useContext(LoadingContext);