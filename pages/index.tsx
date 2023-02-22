import { useSelector } from "react-redux";
import { walletDetailsSelector } from "../store/wallet/selectors";
import {
  useGetBalanceQuery,
  useGetBalanceQueryType,
  useGetTransactionsQuery,
  useGetTransactionsQueryType,
} from "../services/covalent";
import { TransactionList } from "../components/TransactionList";
import { TransactionListMetaData } from "../components/TransationListMetaData";
import { WalletBalances } from "../components/WalletBalances";
import { WalletSelector } from "../components/WalletSelector";

export default function Home(): JSX.Element {
  const walletDetails = useSelector(walletDetailsSelector);

  const { data, error, isLoading }: useGetTransactionsQueryType =
    useGetTransactionsQuery({
      address: process.env.NEXT_PUBLIC_WALLET_ADDRESS || "",
      network: 137,
      page: 0,
    });

  const {
    data: balances,
    error: errorBalances,
    isLoading: isLoadingBalances,
  }: useGetBalanceQueryType = useGetBalanceQuery({
    address: process.env.NEXT_PUBLIC_WALLET_ADDRESS || "",
    network: 137,
  });

  if (error) {
    return <div>Something wrong</div>;
  }

  if (isLoading) {
    return <div>Loading data</div>;
  }

  return (
    <div>
      <div>Home</div>
      <div>{walletDetails.address}</div>

      <WalletSelector />

      {!errorBalances && !isLoadingBalances && (
        <WalletBalances balances={balances} />
      )}
      <TransactionListMetaData transactions={data} />
      <TransactionList transactions={data.items} />
    </div>
  );
}
