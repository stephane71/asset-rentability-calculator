import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./wallet/slice";
import { covalentApi } from "../services";

export const store = configureStore({
  reducer: {
    [covalentApi.reducerPath]: covalentApi.reducer,
    wallet: walletReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(covalentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
