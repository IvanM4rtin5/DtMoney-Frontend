import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { AuthProvider } from './hook/auth';

export function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Router/>
        </AuthProvider>
       <GlobalStyle/>
      </BrowserRouter>
    </>
  );
}