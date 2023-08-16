import { create } from "zustand";
import { MerchantDashboard, WalletStore } from "../types/wallet";
import { merchantApi } from "../config/api";
import axios, { AxiosError } from "axios";
type ServerError = { message: string };
export const useWalletStore = create<WalletStore>((state) => ({
  isLoading: false,
  merchantDashboard: {} as MerchantDashboard,
  transactionHistory: [],
  isError: false,
  errorMsg: "",

  getTransactionHistory: async () => {
    try {
      state({ isLoading: true });
      const response = await merchantApi.get("Wallet/get-transaction-history");
      state({ transactionHistory: response.data.data });
      state({ isError: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        state({ isError: true });
        const serverError = error as AxiosError<ServerError>;
        state({ errorMsg: serverError.response?.data.message });
        state({ isLoading: false });
      }
    }
    state({ isLoading: false });
  },

  getMerchantDashboard: async () => {
    // /Wallet/egt - marchant - dashboard;
    try {
      state({ isLoading: true });
      const response = await merchantApi.get("Wallet/get-marchant-dashboard");
      state({ merchantDashboard: response.data.data });
      state({ isError: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        state({ isError: true });
        const serverError = error as AxiosError<ServerError>;
        console.log(serverError.response);
        state({ errorMsg: serverError.response?.data.message });
        state({ isLoading: false });
      }
    }
  },
  getBankTransaction: async () => {},

  // Fund and Withdraw
  fundWallet: async (amount: number) => {},

  withdraw: async (amount: number) => {},
}));
