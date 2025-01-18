import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { Header } from "../../components/Header";
import { Dashboard } from "../../components/Dashboard";
import { NewTransactionModal } from "../../components/NewtransictionModal";
import { TransactionProvider } from "../../hook/TransactionsContext";
import { useAuth } from '../../hook/auth';

Modal.setAppElement('#root'); // '#root' é o ID do seu elemento raiz no HTML

export function Transactions() {
  const navigate = useNavigate();
  const { user } = useAuth(); // Verifica o usuário autenticado
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  useEffect(() => {
    // Redireciona para o login se o usuário não estiver autenticado
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />  

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />          
    </TransactionProvider>
  );
}
