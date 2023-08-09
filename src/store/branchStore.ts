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
  isFormLoading: false,
  allBranches: [],
  transactionHistory: [],
  error: false,
  showModal: false,
  setModal: (value: boolean) => state({ showModal: value }),
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

  getBranchRequest: async (
    id: number | undefined,
    userName: string | undefined,
    locationName: string | undefined
  ) => {
    try {
      state({ isFormLoading: true });
      state({ error: false });
      await merchantApi.post("Branch/branch-request", {
        branchId: id,
        userName: userName,
        locationName: locationName,
      });
      state({ isFormLoading: false });
    } catch (error) {
      state({ isFormLoading: false });
      state({ error: true });
      error;
    }
  },
}));
