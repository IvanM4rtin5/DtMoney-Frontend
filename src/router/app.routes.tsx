import { Route, Routes } from "react-router-dom";
import { Transactions } from "../pages/transactions";

 
export function AppRoutes(){
    return(
        <Routes>
            <Route path="/transactions" element={<Transactions />}/>
        </Routes>
    );
}