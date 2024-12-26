import { GlobalStyle } from "./styles/global";
import { SignIn } from "./pages/singIn/Singin";

export function App() {
  return (
    <>
      <SignIn/>
      {/* <Header/>
      <Dashboard/>
      <TransactionsTable/> */}
      <GlobalStyle/>
    </>
  );
}