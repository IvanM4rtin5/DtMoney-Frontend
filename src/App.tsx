import Modal from 'react-modal';
import { Routes } from "./router";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');  // '#root' é o ID do seu elemento raiz no HTML

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