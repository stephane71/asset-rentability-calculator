import { RootState } from "../store";

export const walletDetailsSelector = (state: RootState) => ({
  address: state.wallet.address,
  network: state.wallet.network,
});
