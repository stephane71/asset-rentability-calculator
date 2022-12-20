import { Transactions } from "services/covalent/types";

type Props = {
  transactions: Transactions;
};

export function TransactionListMetaData({ transactions }: Props): JSX.Element {
  const { updated_at, quote_currency, pagination } = transactions;
  return (
    <div  style={{ padding: 48 }}>
      <div>Last update {updated_at}</div>
      <div>Currency {quote_currency}</div>
      <div>Pagination {JSON.stringify(pagination)}</div>
    </div>
  );
}
