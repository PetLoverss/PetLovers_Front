import React,{ createContext, useState,useEffect } from "react";
import { parseJsonSourceFileConfigFileContent } from "typescript";
import Data from '../context/Data';
export const DataContext=createContext();


export const DataProvider=(props)=>{
    const [productos,setProductos] = useState([])

    useEffect(()=>{
        const producto=Data
        setProductos(producto)
    },[])

    const value={
        productos:[productos]
    }
    return(
        <DataContext.Provider value={value}>
            {props.children}    
        </DataContext.Provider>

    )
};
export default DataProvider;