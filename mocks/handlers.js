import { rest } from "msw";
import walletTransitions from "./walletTransactions.json";
import { COVALENT_API_URL } from "../store/enums";

const FIX_API_URL = `${COVALENT_API_URL}/:network/address/:address/transactions_v2`;

export const handlers = [
  rest.get(FIX_API_URL, (_req, res, ctx) => {
    return res(ctx.json(walletTransitions));
  }),
];
