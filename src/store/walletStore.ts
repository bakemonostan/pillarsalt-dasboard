import { create } from "zustand";
import {
  BankTransaction,
  MerchantDashboard,
  TransactionHistory,
  WalletStore,
} from "../types/wallet";
import { merchantApi } from "../config/api";
import { handleApiRequest } from "../utils/handelRequest";

export const useWalletStore = create<WalletStore>((state) => ({
  isLoading: false,
  merchantDashboard: [],
  transactionHistory: [],

  getTransactionHistory: async () => {
    const apiRequest = merchantApi.get("Wallet/get-transaction-history");
    const setState = (transactionHistory: any[]) =>
      state({ transactionHistory });
    await handleApiRequest(state, apiRequest, setState);
  },

  getMerchantDashboard: async () => {},
  getBankTransaction: async () => {},
  fundWallet: async (amount: number) => {},
  withdraw: async (amount: number) => {},
}));
