import { create } from "zustand";
import {
  AllBranches,
  BranchRequest,
  BranchStore,
  BranchTransactionHistory,
} from "../types/branch";
import { merchantApi } from "../config/api";

export const useBranchStore = create<BranchStore>((state) => ({
  isLoading: false,
  allBranches: [],
  transactionHistory: [],

  getAllBranches: async () => {
    try {
      state({ isLoading: true });
      const response = await merchantApi.get("/Branch/get-all-branch");
      state({ isLoading: false });
      const allBranches = response?.data.data;
      state({ allBranches });
    } catch (error) {
      error;
    }
  },

  getBranchTransactionHistory: async () => {
    try {
      state({ isLoading: true });
      const response = await merchantApi.get(
        "/Branch/get-branch-transaction-history"
      );
      state({ isLoading: false });
      const transactionHistory = response?.data.data;
      state({ transactionHistory });
    } catch (error) {
      error;
    }
  },
}));
