import { GlobalStyle } from "./styles/global";
import { SignIn } from "./pages/singIn/Singin";
import { SingOut } from "./pages/singOut/Singout";

export function App() {
  return (
    <>
      <SignIn/>
      <SingOut/>  
      {/* <Header/>
      <Dashboard/>
      <TransactionsTable/> */}
      <GlobalStyle/>
    </>
  );
}