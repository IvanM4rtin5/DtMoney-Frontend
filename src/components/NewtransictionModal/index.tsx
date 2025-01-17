import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hook/TransactionsContext';

import closeImg from '../../assets/Tipo=x-regular.png';
import incomeImg from '../../assets/Tipo=arrow-circle-up-regular.svg';
import outcomeImg from '../../assets/Tipo=arrow-circle-down-regular.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmout] = useState('');
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ type, title, amount: Number(amount), category });

    setType('deposit');
    setTitle('');
    setAmout('');
    setCategory('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        },
        content: {
          position: 'relative',
          background: 'transparent',
          border: 'none',
          padding: 0,
        }
      }}
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <div className="modal-header">
          <h2>Nova Transação</h2>
          <button 
            type="button" 
            onClick={onRequestClose}
            className="close-button"
          >
            <img src={closeImg} alt="Fechar modal" />
          </button>
        </div>

        <input
          type="text"
          placeholder="Descrição"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />

        <input
          type="number"
          placeholder="Preço"
          value={amount}
          onChange={({ target }) => setAmout(target.value)}
          step='0.01'
          min='0.01'
          
        />

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}