import { create } from "zustand";
import { merchantApi } from "../config/api";
import { DashBoard } from "../types/dasboard";
import { handleApiRequest } from "../utils/handelRequest";

export const useDashboardStore = create<DashBoard>((set) => ({
  isLoading: false,
  currentBalance: 0,
  totalTransactions: 0,
  totalwithdrawals: 0,
  totalbranches: "0",
  getCurrentBalance: async () => {
    set({ isLoading: true });
    const req = merchantApi.get(
      "/DashboardAndReport/get-current-balance-dashboard"
    );
    const setState = (currentBalance: number) => {
      set({ currentBalance });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },
  getTotalTransactions: async () => {
    set({ isLoading: true });
    const req = merchantApi.get(
      "/DashboardAndReport/get-total-transaction-dashboard"
    );
    const setState = (totalTransactions: number) => {
      set({ totalTransactions });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },
  getTotalWithdrawals: async () => {
    set({ isLoading: true });
    const req = merchantApi.get(
      "/DashboardAndReport/get- total-withdrawal-dashboard"
    );
    const setState = (totalwithdrawals: number) => {
      set({ totalwithdrawals });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },
  getTotalBranches: async () => {
    set({ isLoading: true });
    const req = merchantApi.get(
      "/DashboardAndReport/get-total-branch-dashboard"
    );
    const setState = (totalbranches: string) => {
      set({ totalbranches });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },
}));
