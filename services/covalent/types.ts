export type CovalentApiResponse = {
  data: CovalentApiResponseData;
  error: string;
  error_code: string;
  error_message: string;
};

export type Pagination = {
  has_more: boolean;
  page_number: number;
  page_size: number;
  total_count: any;
};

export type CovalentApiResponseData = {
  items: TransactionItem[] | BalanceItem[];
  address: string;
  chain_id: number;
  pagination: Pagination;
  next_update_at: string;
  updated_at: string;
  quote_currency: string;
};

export type TransactionItem = {
  block_height: number;
  block_signed_at: string;
  fees_paid: string;
  from_address: string;
  from_address_label: never;
  gas_offered: number;
  gas_price: number;
  gas_quote: number;
  gas_quote_rate: number;
  gas_spent: number;
  log_events: TransactionItemLogEvent[];
  successful: boolean;
  to_address: string;
  to_address_label: string;
  tx_hash: string;
  tx_offset: number;
  value: string;
  value_quote: number;
};

export type TransactionItemLogEvent = {
  block_height: number;
  block_signed_at: number;
  decoded: any;
  log_offset: number;
  raw_log_data: string;
  raw_log_topics: string[];
  sender_address: string;
  sender_address_label: string;
  sender_contract_decimals: number;
  sender_contract_ticker_symbol: string;
  sender_logo_url: string;
  sender_name: string;
  tx_hash: string;
  tx_offset: number;
};

export type BalanceItem = {
  balance: string;
  balance_24h: string;
  contract_address: string;
  contract_decimals: number;
  contract_name: string;
  contract_ticker_symbol: string;
  last_transferred_at: string;
  logo_url: string;
  native_token: boolean;
  nft_data: any;
  quote: number;
  quote_24h: any;
  quote_rate: number;
  quote_rate_24h: any;
  supports_erc: string[];
  type: string;
};
