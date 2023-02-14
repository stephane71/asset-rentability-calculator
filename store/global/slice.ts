import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function prepare() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("../../mocks/browser");
    return worker.start();
  }
  return Promise.resolve();
}

export const startServiceWorker = createAsyncThunk(
  "global/startServiceWorker",
  async () => {
    return prepare();
  }
);

export interface WalletState {
  isServiceWorkerReady: boolean;
}

const initialState: WalletState = {
  isServiceWorkerReady: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(startServiceWorker.fulfilled, (state) => {
      state.isServiceWorkerReady = true;
    });
  },
});

export default globalSlice.reducer;
