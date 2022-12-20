import { useSelector, useDispatch } from "react-redux";
import { walletAddressSelector } from "../store/wallet/selectors";
import { setAddress } from "../store/wallet/slice";
import { useEffect } from "react";
import {
  useGetTransactionsQuery,
  useGetTransactionsQueryType,
} from "../services/covalent";
import { TransactionListMetaData } from "../components/TransationListMetaData";

export default function Home(): JSX.Element {
  const address = useSelector(walletAddressSelector);
  const dispatch = useDispatch();
  const { data, error, isLoading }: useGetTransactionsQueryType =
    useGetTransactionsQuery({
      address: process.env.NEXT_PUBLIC_WALLET_ADDRESS || "",
      network: 137,
      page: 0,
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

      <TransactionListMetaData transactions={data} />
    </div>
  );
}
