import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const useCustomContext = () => {
    return useContext(Context);
};

export const ContextProvider = ({ children }) => {
    const [count, setCount] = useState(10);
    const [stockData,setStockData] = useState([]);
    const [priceDiff,setPriceDiff] = useState([]);

    return (
        <Context.Provider value={{ count, setCount, stockData, setStockData, priceDiff, setPriceDiff }}>
            {children}
        </Context.Provider>
    );
};
