import { useTransactions } from "../../hook/TransactionsContext";
import incomeImg from "../../assets/Tipo=arrow-circle-up-regular.svg";
import outcomeImg from "../../assets/Tipo=arrow-circle-down-regular.svg";
import totalImg from "../../assets/IconsTotal.svg";
import { Container } from "./styles";

export function Summary() {
    const { transactions, isLoading, error } = useTransactions();

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'deposit') {
                acc.deposits += transaction.amount;
                acc.total += transaction.amount;
            } else {
                acc.withdraws += transaction.amount;
                acc.total -= transaction.amount;
            }
            return acc;
        },
        {
            deposits: 0,
            withdraws: 0,
            total: 0,
        }
    );

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    if (isLoading) {
        return (
            <Container>
                <div>
                    <p>Carregando...</p>
                </div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <div>
                    <p style={{ color: 'red' }}>{error}</p>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>{formatCurrency(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saída" />
                </header>
                <strong>{formatCurrency(summary.withdraws)}</strong>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>{formatCurrency(summary.total)}</strong>
            </div>
        </Container>
    );
}