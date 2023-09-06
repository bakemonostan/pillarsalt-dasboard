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
  activeWallets: "0",
  newWallets: "0",
  dormantWallets: "0",
  registeredWallets: "0",
  averageTransactionValue: "0",
  transactionsProcessed: "0",
  transactionVolume: "0",

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

  getActiveWallets: async () => {
    set({ isLoading: true });
    const req = merchantApi.get(
      "/DashboardAndReport/get-active-wallet-dashboard"
    );
    const setState = (activeWallets: string) => {
      set({ activeWallets });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },
  getNewWallets: async () => {
    set({ isLoading: true });
    const req = merchantApi.get("/DashboardAndReport/get-new-wallet-dashboard");
    const setState = (newWallets: string) => {
      set({ newWallets });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },

  getDormantWallets: async () => {
    set({ isLoading: true });
    const req = merchantApi.get(
      "/DashboardAndReport/get-domain-wallet-dashboard"
    );
    const setState = (dormantWallets: string) => {
      set({ dormantWallets });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },

  getRegisteredWallets: async () => {
    set({ isLoading: true });
    const req = merchantApi.get(
      "/DashboardAndReport/get-register-wallet-dashboard"
    );
    const setState = (registeredWallets: string) => {
      set({ registeredWallets });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },

  getaverageTransactionValue: async () => {
    set({ isLoading: true });
    const req = merchantApi.get(
      "/DashboardAndReport/get-total-Average-transaction-dashboard"
    );
    const setState = (averageTransactionValue: string) => {
      set({ averageTransactionValue });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },

  getTransactionsProcessed: async () => {
    set({ isLoading: true });
    const req = merchantApi.get(
      "/DashboardAndReport/get-all-transaction-proccessed-dashboard"
    );
    const setState = (transactionsProcessed: string) => {
      set({ transactionsProcessed });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },
  getTransactionVolume: async () => {
    set({ isLoading: true });
    const req = merchantApi.get(
      "/DashboardAndReport/get-total-transaction-volume-dashboard"
    );
    const setState = (transactionVolume: string) => {
      set({ transactionVolume });
    };
    await handleApiRequest(set, req, setState);
    set({ isLoading: false });
  },
}));
