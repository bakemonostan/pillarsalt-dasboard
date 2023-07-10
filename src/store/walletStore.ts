import { create } from "zustand";
import { MerchantDashboard, WalletStore } from "../types/wallet";
import { merchantApi } from "../config/api";
import { handleApiRequest } from "../utils/handelRequest";

export const useWalletStore = create<WalletStore>((state) => ({
  isLoading: false,
  merchantDashboard: {} as MerchantDashboard,
  transactionHistory: [],

  getTransactionHistory: async () => {
    const apiRequest = merchantApi.get("Wallet/get-transaction-history");
    const setState = (transactionHistory: any[]) =>
      state({ transactionHistory });
    await handleApiRequest(state, apiRequest, setState);
  },

  getMerchantDashboard: async () => {
    const apiRequest = merchantApi.get("/Wallet/get-marchant-dashboard");
    const setState = (merchantDashboard: MerchantDashboard) => {
      state({ merchantDashboard });
    };
    await handleApiRequest(state, apiRequest, setState);
  },
  getBankTransaction: async () => {},

  // Fund and Withdraw
  fundWallet: async (amount: number) => {
    const apiRequest = merchantApi.post("/Wallet/fund-wallet", { amount });
    const setState = (merchantDashboard: MerchantDashboard) => {
      state({ merchantDashboard });
    };
    await handleApiRequest(state, apiRequest, setState);
  },
  withdraw: async (amount: number) => {
    const apiRequest = merchantApi.post("/Wallet/withdraw", { amount });
    const setState = (merchantDashboard: MerchantDashboard) => {
      state({ merchantDashboard });
    };
    await handleApiRequest(state, apiRequest, setState);
  },
}));
