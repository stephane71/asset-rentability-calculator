import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { TransactionResponse, Transactions } from "./types";

type CovalentQueryParams = {
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
  tagTypes: ["Wallet", "Transactions"],
  endpoints: (build) => ({
    getTransactions: build.query<Transactions, CovalentQueryParams>({
      query: ({ network, address }) =>
        `${network}/address/${address}/transactions_v2/?key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`,
      providesTags: ["Wallet", "Transactions"],
      transformResponse: (response: TransactionResponse): Transactions =>
        response.data as Transactions,
    }),
  }),
});

export const { useGetTransactionsQuery } = api;
export type useGetTransactionsQueryType = ReturnType<
  typeof useGetTransactionsQuery
>;
