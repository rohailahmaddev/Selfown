import { createContext, useEffect, useState } from 'react';
export const Data = createContext(null);

export const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)

    const contextData = {
        loading,
        setLoading,
    }
    return (
        <Data.Provider value={contextData}>{children}</Data.Provider>
    )
}