export interface BranchStore {
  allBranches: AllBranches[];
  isLoading: boolean;
  transactionHistory: BranchTransactionHistory[];
  getAllBranches: () => Promise<void>;
  getBranch?: (id: number, user: string) => Promise<AllBranches>;
  getBranchRequest?: (id: number) => Promise<BranchRequest>;
  getBranchTransactionHistory: () => Promise<void>;
}

export interface AllBranches {
  id: number;
  createdAt: string;
  modifiedAt: string;
  isDeleted: boolean;
  createdBy: string;
  acquirerId: number;
  regionId: number;
  branchName: string;
  branchCode: string;
  address: string;
  phoneNumber: string;
  email: string;
  managerName: string;
  status: boolean;
}

export interface BranchRequest {
  id: number;
  createdAt: string;
  modifiedAt: string;
  isDeleted: boolean;
  createdBy: string;
  merchantId: number;
  branchId: number;
  acquirerId: number;
  status: number;
}

export interface BranchTransactionHistory {
  id: number;
  createdAt: string;
  modifiedAt: string;
  isDeleted: boolean;
  createdBy: string;
  transactionRef: string;
  depositor: string;
  branchID: number;
  branchName: string;
  amount: number;
  status: string;
  narration: string;
}

export interface TotalBranchDashboard {}
