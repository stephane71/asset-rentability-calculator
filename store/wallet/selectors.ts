import { RootState } from "../store";

export const walletAddressSelector = (state: RootState) => state.wallet.address;
