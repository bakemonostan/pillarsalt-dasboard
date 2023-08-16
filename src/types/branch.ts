export interface BranchStore {
  allBranches: AllBranches[];
  isFormLoading: boolean;
  isLoading: boolean;
  error: boolean;
  errorMsg?: string;
  success: boolean;
  showModal: boolean;
  setModal: (value: boolean) => void;
  transactionHistory: BranchTransactionHistory[];
  getAllBranches: () => Promise<void>;
  getBranch?: (id: number, user: string) => Promise<AllBranches>;
  getBranchRequest: (
    id: number | undefined,
    userName: string | undefined,
    locationName: string | undefined
  ) => Promise<void>;
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

export interface BranchReportProps extends AllBranches {}
export interface transactionHistoryProps extends BranchTransactionHistory {}

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
