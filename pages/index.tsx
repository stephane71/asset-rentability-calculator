import { useSelector } from "react-redux";
import { walletDetailsSelector } from "../store/wallet/selectors";
import { WalletBalances } from "../components/WalletBalances";
import { WalletSelector } from "../components/WalletSelector";

export default function Home(): JSX.Element {
  const { address, network } = useSelector(walletDetailsSelector);

  return (
    <div>
      <div>Home</div>
      <div>{address}</div>

      <WalletSelector />

      {address && network && (
        <WalletBalances address={address} network={network} />
      )}

      {/*<TransactionListMetaData transactions={data} />*/}
      {/*<TransactionList transactions={data.items} />*/}
    </div>
  );
}
