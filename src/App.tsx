import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <TransactionsTable/>
      <GlobalStyle/>
    </>
  );
}