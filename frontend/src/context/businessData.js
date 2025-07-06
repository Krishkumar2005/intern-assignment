import { createContext, useContext } from "react";

export const BusinessDataContext = createContext();

export function useBusinessData(){
    return useContext(BusinessDataContext)
}