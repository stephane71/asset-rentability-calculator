import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import {
  TransactionItem,
  CovalentApiResponse,
  CovalentApiResponseData,
  BalanceItem,
} from "./types";

type GetTransactionsQueryParams = {
  network: number;
  address: string;
  page: number;
};

type GetTransactionParams = {
  network: number;
  txHash: string;
};

type GetBalancesParams = {
  network: number;
  address: string;
};

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.covalenthq.com/v1",
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const api = createApi({
  reducerPath: "covalentApi",
  baseQuery: baseQueryWithRetry,
  tagTypes: ["Wallet", "Transactions", "Transaction", "Balances"],
  endpoints: (build) => ({
    getTransactions: build.query<
      CovalentApiResponseData,
      GetTransactionsQueryParams
    >({
      query: ({ network, address, page }) =>
        `${network}/address/${address}/transactions_v2/?key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}&page-number=${page}`,
      providesTags: ["Wallet", "Transactions"],
      transformResponse: (
        response: CovalentApiResponse
      ): CovalentApiResponseData => response.data,
    }),
    getTransaction: build.query<TransactionItem, GetTransactionParams>({
      query: ({ network, txHash }) =>
        `${network}/transaction_v2/${txHash}/?key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`,
      providesTags: ["Wallet", "Transaction"],
      transformResponse: (response: CovalentApiResponse): TransactionItem =>
        response.data && (response.data.items[0] as TransactionItem),
    }),
    getBalance: build.query<BalanceItem[], GetBalancesParams>({
      query: ({ network, address }) =>
        `${network}/address/${address}/balances_v2/?key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`,
      providesTags: ["Wallet", "Balances"],
      transformResponse: (response: CovalentApiResponse): BalanceItem[] =>
        response.data && (response.data.items as BalanceItem[]),
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useGetTransactionQuery,
  useGetBalanceQuery,
} = api;
export type useGetTransactionsQueryType = ReturnType<
  typeof useGetTransactionsQuery
>;
export type useGetTransactionQueryType = ReturnType<
  typeof useGetTransactionQuery
>;
export type useGetBalanceQueryType = ReturnType<typeof useGetBalanceQuery>;
