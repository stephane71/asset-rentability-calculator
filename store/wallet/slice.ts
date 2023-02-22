import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WalletState {
  address: string;
  network: number | null;
}

const initialState: WalletState = {
  address: "",
  network: null,
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletDetails: (
      state,
      action: PayloadAction<Pick<WalletState, "address" | "network">>
    ) => {
      const { address, network } = action.payload;
      return { ...state, address, network };
    },
  },
});

export const { setWalletDetails } = walletSlice.actions;

export default walletSlice.reducer;
