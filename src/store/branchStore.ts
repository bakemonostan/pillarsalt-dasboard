import { create } from "zustand";
import { BranchStore } from "../types/branch";
import { merchantApi } from "../config/api";
import axios, { AxiosError } from "axios";
type ServerError = { message: string };

export const useBranchStore = create<BranchStore>((state) => ({
  isLoading: false,
  isFormLoading: false,
  errorMsg: "",
  allBranches: [],
  transactionHistory: [],
  error: false,
  showModal: false,
  success: false,
  setModal: (value: boolean) => state({ showModal: value }),
  getAllBranches: async () => {
    try {
      state({ isLoading: true });
      const response = await merchantApi.get("/Branch/get-all-branch");
      state({ isLoading: false });
      const allBranches = response?.data.data;
      state({ allBranches });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        state({ error: true });
        const serverError = error as AxiosError<ServerError>;
        state({ errorMsg: serverError.response?.data.message });
        console.log(serverError.response?.data.message);
        state({ isLoading: false });
      }
    }
    state({ isLoading: false });
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
      if (axios.isAxiosError(error)) {
        state({ error: true });
        const serverError = error as AxiosError<ServerError>;
        state({ errorMsg: serverError.response?.data.message });
        console.log(serverError.response?.data.message);
        state({ isLoading: false });
      }
    }
    state({ isLoading: false });
  },

  getBranchRequest: async (
    id: number | undefined,
    userName: string | undefined,
    locationName: string | undefined
  ) => {
    try {
      state({ isFormLoading: true });
      await merchantApi.post("Branch/branch-request", {
        branchId: id,
        userName: userName,
        locationName: locationName,
      });
      state({ isFormLoading: false, error: false, success: true });
      setTimeout(() => {
        state({ success: false });
      }, 3000);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        state({ error: true });
        const serverError = error as AxiosError<ServerError>;
        state({ errorMsg: serverError.response?.data.message });
        state({ isFormLoading: false });
      }
    }
  },
}));
