import { TransactionItem } from "services/covalent/types";
import { TransactionListItem } from "../TransactionListItem";

type Props = {
  transactions: TransactionItem[];
};

export function TransactionList({ transactions }: Props): JSX.Element {
  return (
    <div style={{ padding: 48 }}>
      {transactions.map((transaction) => (
        <TransactionListItem
          key={transaction.tx_hash}
          transaction={transaction}
        />
      ))}
    </div>
  );
}
