import { rest } from "msw";
import { COVALENT_API_URL } from "../store/enums";
import WalletTransitions from "./WalletTransactions0.mock.json";
import WalletBalances from "./WalletBalances.mock.json";
import Transaction from "./Transaction.mock.json";

const COVALENT_NETWORK = ":network/address/:address";
const COVALENT_TRANSACTIONS = `transactions_v2`;
const COVALENT_BALANCES = `balances_v2`;

export const handlers = [
  rest.get(
    `${COVALENT_API_URL}/${COVALENT_NETWORK}/${COVALENT_TRANSACTIONS}`,
    (_req, res, ctx) => {
      return res(ctx.json(WalletTransitions));
    }
  ),

  rest.get(
    `${COVALENT_API_URL}/${COVALENT_NETWORK}/${COVALENT_BALANCES}`,
    (_req, res, ctx) => {
      return res(ctx.json(WalletBalances));
    }
  ),

  rest.get(
    `${COVALENT_API_URL}/${COVALENT_NETWORK}/${COVALENT_BALANCES}/:tsxHash`,
    (_req, res, ctx) => {
      return res(ctx.json(Transaction));
    }
  ),
];
