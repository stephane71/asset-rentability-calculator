import { RootState } from "../store";

export const isServiceWorkerReadySelector = (state: RootState) =>
  state.global.isServiceWorkerReady;
