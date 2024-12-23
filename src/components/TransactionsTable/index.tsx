import { useEffect } from 'react';
import { Container } from './styles';
// import { useTransactions } from '../../hook/TransactionsContext';

export const TransactionsTable = () => {
  useEffect(() => {
    fetch('http://localhost:3333/transactions')
    .then(response => response.json())
    .then(data => console.log(data));
  }, []);
//   const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        {/* { <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody> */}
      </table> 
    </Container>
  );
}