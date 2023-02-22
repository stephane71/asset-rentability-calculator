import { BalanceItem } from "../../services/covalent/types";
import { formatDecimals } from "../../utils";

type Props = {
  balances: BalanceItem[];
};

export function WalletBalances({ balances }: Props) {
  return (
    <div style={{ padding: 24 }}>
      {balances
        .filter(({ balance }) => balance !== "0")
        .map(
          ({
            contract_address,
            contract_name,
            contract_ticker_symbol,
            balance,
            contract_decimals,
          }) => (
            <div key={contract_address}>
              {contract_name} - {contract_ticker_symbol} -{" "}
              {formatDecimals(Number.parseInt(balance), contract_decimals)}
            </div>
          )
        )}
    </div>
  );
}
