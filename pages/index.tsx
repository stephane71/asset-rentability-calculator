import { useSelector, useDispatch } from "react-redux";
import { walletAddressSelector } from "../store/wallet/selectors";
import { setAddress } from "../store/wallet/slice";
import { useEffect } from "react";
import {
  useGetBalanceQuery,
  useGetBalanceQueryType,
  useGetTransactionsQuery,
  useGetTransactionsQueryType,
} from "../services/covalent";
import { TransactionList } from "../components/TransactionList";
import { TransactionListMetaData } from "../components/TransationListMetaData";
import { Balances } from "../components/Balances";

export default function Home(): JSX.Element {
  const address = useSelector(walletAddressSelector);
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(setAddress(process.env.NEXT_PUBLIC_WALLET_ADDRESS || ""));
  }, [dispatch]);

  if (error) {
    return <div>Something wrong</div>;
  }

  if (isLoading) {
    return <div>Loading data</div>;
  }

  return (
    <div>
      <div>Home</div>
      <div>{address}</div>

      {!errorBalances && !isLoadingBalances && <Balances balances={balances} />}
      <TransactionListMetaData transactions={data} />
      <TransactionList transactions={data.items} />
    </div>
  );
}
