import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WalletState {
  address: string;
}

const initialState: WalletState = {
  address: "",
};

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      return { ...state, address: action.payload };
    },
  },
});

export const { setAddress } = walletSlice.actions;

export default walletSlice.reducer;
