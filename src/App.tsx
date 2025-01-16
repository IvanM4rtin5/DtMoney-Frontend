import { GlobalStyle } from "./styles/global";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";

import { Routes } from "./router";

export function App() {
  return (
    <>
      <Routes/>
      {/* <Header/>
      <Dashboard/>
      <TransactionsTable/> */}
      <GlobalStyle/>
    </>
  );
}