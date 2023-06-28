export interface DashBoard {
  isLoading: boolean;
  currentBalance: number;
  totalTransactions: number;
  totalwithdrawals: number;
  totalbranches: string;
  registeredWallets: string;
  activeWallets: string;
  newWallets: string;
  dormantWallets: string;
  //   getDashboard: () => Promise<void>;
  getCurrentBalance: () => Promise<void>;
  getTotalTransactions: () => Promise<void>;
  getTotalWithdrawals: () => Promise<void>;
  getTotalBranches: () => Promise<void>;
  getRegisteredWallets: () => Promise<void>;
  getActiveWallets: () => Promise<void>;
  getNewWallets: () => Promise<void>;
  getDormantWallets: () => Promise<void>;
}
