import { useEffect, useState } from "react"
import { Container } from "./styles"
import { NewTransactionModal } from "../NewtransictionModal"
import { useTransactions, Transaction } from "../../hook/TransactionsContext"
import { api } from "../../service/api"

export const TransactionsTable = () => {
  const { transactions, deleteTransaction, setTransactions } = useTransactions()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null)

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => { 
        console.log(response.data);
        setTransactions(response.data);
      })
      .catch((error) => console.log("erro ao buscar transações", error));
  }, []);

  function handleOpenEditModal(transaction: Transaction) {
    setEditingTransaction(transaction)
    setIsModalOpen(true)
  }

  const handleDelete = async (transactionId: number) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir essa transação?"
    )
    if (!confirmDelete) return

    try {
      await deleteTransaction(transactionId)
      alert("Transação excluída com sucesso!")
    } catch (error) {
      alert("Erro ao excluir transação.")
    }
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td>
                <button
                  onClick={() => handleOpenEditModal(transaction)}
                  type="button"
                  style={{ backgroundColor: "var(--green)" }}
                >
                  Editar
                </button>
                <button
                  type="button"
                  style={{ backgroundColor: "var(--red)" }}
                  onClick={() => handleDelete(transaction.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de Edição */}
      {isModalOpen && (
        <NewTransactionModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          transaction={editingTransaction} // Passe os dados da transação para o modal
          isEditing={!!editingTransaction} // Define como "true" se estiver editando
        />
      )}
    </Container>
  )
}
