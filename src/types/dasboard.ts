export interface DashBoard {
  isLoading: boolean;
  currentBalance: number;
  totalTransactions: number;
  totalwithdrawals: number;
  totalbranches: string;
  //   getDashboard: () => Promise<void>;
  getCurrentBalance: () => Promise<void>;
  getTotalTransactions: () => Promise<void>;
  getTotalWithdrawals: () => Promise<void>;
  getTotalBranches: () => Promise<void>;
}
