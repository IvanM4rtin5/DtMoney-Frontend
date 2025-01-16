import { TransactionProvider } from "../../hook/TransactionsContext";
import { TransactionsTable } from "../../components/TransactionsTable";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { Dashboard } from "../../components/Dashboard";


export function Transactions() {
    return (
        <TransactionProvider>
            <Header />
            <Dashboard />
            <TransactionsTable />
        </TransactionProvider>
    );
}