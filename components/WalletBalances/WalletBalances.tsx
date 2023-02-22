import { BalanceItem } from "../../services/covalent/types";
import { formatDecimals } from "../../utils";
import {
  useGetBalanceQuery,
  useGetBalanceQueryType,
} from "../../services/covalent";

type Props = {
  address: string;
  network: number;
};

export function WalletBalances({ address, network }: Props) {
  const { data, error, isLoading }: useGetBalanceQueryType = useGetBalanceQuery(
    {
      address,
      network,
    }
  );

  if (error) {
    return <div>Error when fetching balances</div>;
  }

  if (isLoading) {
    return <div>Loading wallet balances</div>;
  }

  return (
    <div style={{ padding: 24 }}>
      {data
        .filter(({ balance }: BalanceItem) => balance !== "0")
        .map(
          ({
            contract_address,
            contract_name,
            contract_ticker_symbol,
            balance,
            contract_decimals,
          }: BalanceItem) => (
            <div key={contract_address}>
              {contract_name} - {contract_ticker_symbol} -{" "}
              {formatDecimals(Number.parseInt(balance), contract_decimals)}
            </div>
          )
        )}
    </div>
  );
}
