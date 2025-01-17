import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react";
import { api } from "../service/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTransactions();
  }, []);

  async function loadTransactions() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await api.get('transactions');
      
      // Verifica se a resposta tem a propriedade transactions
      const data = response.data.transactions || response.data;
      setTransactions(data);
    } catch (err) {
      setError('Erro ao carregar as transações. Tente novamente mais tarde.');
      console.error('Erro ao carregar transações:', err);
    } finally {
      setIsLoading(false);
    }
  }

  async function createTransaction(transactionInput: TransactionInput) {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await api.post('/transactions', {
        ...transactionInput,
        createdAt: new Date()
      });

      const transaction = response.data.transaction || response.data;
      setTransactions(prevTransactions => [...prevTransactions, transaction]);
    } catch (err) {
      setError('Erro ao criar transação. Tente novamente mais tarde.');
      console.error('Erro ao criar transação:', err);
      throw err; // Re-throw para tratamento no componente
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TransactionContext.Provider value={{ 
      transactions, 
      createTransaction, 
      isLoading, 
      error 
    }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);
  
  if (!context) {
    throw new Error('useTransactions deve ser usado dentro de um TransactionProvider');
  }
  
  return context;
}