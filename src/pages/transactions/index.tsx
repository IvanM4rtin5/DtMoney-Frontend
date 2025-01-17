import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from "../../components/Header";
import { Dashboard } from "../../components/Dashboard";
import { NewTransactionModal } from "../../components/NewtransictionModal";
import { TransactionProvider } from "../../hook/TransactionsContext";

Modal.setAppElement('#root');  // '#root' é o ID do seu elemento raiz no HTML
export function Transactions() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

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