import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import { SignIn } from "./pages/Singin";

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