import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { api } from "../service/api"

export interface Transaction {
  id: number
  title: string
  amount: number
  type: "deposit" | "withdraw"
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
  updateTransaction: (transaction: Transaction) => Promise<void>
  deleteTransaction: (transactionId: number) => Promise<void>
  isLoading: boolean
  error: string | null
  setTransactions: (transactions: Transaction[]) => void
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
)

export const TransactionProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadTransactions()
  }, [])

  async function loadTransactions() {
    try {
      setIsLoading(true)
      setError(null)
      const response = await api.get("transactions")

      // Verifica se a resposta tem a propriedade transactions
      const data = response.data.transactions || response.data
      setTransactions(data)
    } catch (err) {
      setError("Erro ao carregar as transações. Tente novamente mais tarde.")
      console.error("Erro ao carregar transações:", err)
    } finally {
      setIsLoading(false)
    }
  }

  async function createTransaction(transactionInput: TransactionInput) {
    try {
      setIsLoading(true)
      setError(null)

      const response = await api.post("/transactions", {
        ...transactionInput,
        createdAt: new Date(),
      })

      const transaction = response.data.transaction || response.data
      setTransactions((prevTransactions) => [...prevTransactions, transaction])
    } catch (err) {
      setError("Erro ao criar transação. Tente novamente mais tarde.")
      console.error("Erro ao criar transação:", err)
      throw err // Re-throw para tratamento no componente
    } finally {
      setIsLoading(false)
    }
  }
  async function updateTransaction(transaction: Transaction) {
    try {
      setIsLoading(true)
      setError(null)

      const response = await api.put(`/transactions/${transaction.id}`, {
        title: transaction.title,
        amount: transaction.amount,
        type: transaction.type,
        category: transaction.category,
      })

      const updatedTransaction = response.data

      setTransactions((prevTransactions) =>
        prevTransactions.map((t) =>
          t.id === transaction.id ? updatedTransaction : t
        )
      )
    } catch (err) {
      setError("Erro ao atualizar transação. Tente novamente mais tarde.")
      console.error("Erro ao atualizar transação:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  async function deleteTransaction(transactionId: number) {
    try {
      setIsLoading(true)
      setError(null)

      await api.delete(`/transactions/${transactionId}`)

      setTransactions((prevTransactions) =>
        prevTransactions.filter(
          (transaction) => transaction.id !== transactionId
        )
      )
    } catch (err) {
      setError("Erro ao excluir transação. Tente novamente mais tarde.")
      console.error("Erro ao excluir transação:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        createTransaction,
        updateTransaction,
        deleteTransaction,
        isLoading,
        error,
        setTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionContext)

  if (!context) {
    throw new Error(
      "useTransactions deve ser usado dentro de um TransactionProvider"
    )
  }

  return context
}
