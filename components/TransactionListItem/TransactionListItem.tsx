import { format } from "date-fns";
import {
  TransactionItem,
  TransactionItemLogEvent,
} from "../../services/covalent/types";
import { formatDecimals } from "../../utils";

type Props = {
  transaction: TransactionItem;
};

export function TransactionListItem({ transaction: data }: Props) {
  if (!data || !data.successful) {
    return <>Error</>;
  }

  const logEventsTransfer = data.log_events
    .filter((e: TransactionItemLogEvent) => e.decoded)
    .filter((e: TransactionItemLogEvent) => e.decoded.name === "Transfer");

  const logEventsTransferRefAddress = logEventsTransfer.filter(
    ({ decoded }: TransactionItemLogEvent) =>
      decoded.params[0].value === process.env.NEXT_PUBLIC_WALLET_ADDRESS ||
      decoded.params[1].value === process.env.NEXT_PUBLIC_WALLET_ADDRESS
  );

  return (
    <div style={{ paddingBottom: 16 }}>
      <div style={{ backgroundColor: "lightgrey" }}>
        {format(new Date(data.block_signed_at), "dd/MM/yyyy H:m")}
      </div>
      <div style={{ backgroundColor: "lightgrey" }}>
        {formatDecimals(Number.parseInt(data.fees_paid), 18)} MATIC
      </div>
      {logEventsTransferRefAddress.map(
        ({
          sender_name,
          decoded,
          log_offset,
          sender_contract_decimals,
          sender_contract_ticker_symbol,
        }: TransactionItemLogEvent) => (
          <div key={log_offset} style={{ padding: 4 }}>
            <div>
              {sender_name} - ({sender_contract_ticker_symbol}) -{" "}
              {decoded.params[0].value ===
              process.env.NEXT_PUBLIC_WALLET_ADDRESS
                ? "OUT"
                : "IN"}{" "}
              -{" "}
              {formatDecimals(
                Number.parseInt(decoded.params[2].value),
                sender_contract_decimals
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
