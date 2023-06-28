export interface WalletStore {
  isLoading: boolean;
  transactionHistory: TransactionHistory[];
  merchantDashboard: MerchantDashboard;
  getTransactionHistory: () => Promise<void>;
  getMerchantDashboard: () => Promise<void>;
  getBankTransaction: () => Promise<void>;
  fundWallet: (amount: number) => Promise<void>;
  withdraw: (amount: number) => Promise<void>;
}

interface Global {
  id: string;
  createdAt: string;
  modifiedAt: string;
  isDeleted: boolean;
  createdBy?: string;
}

export interface MerchantDashboard {
  global: Global;
  walletId: string;
  userId: string;
  bankId: string;
  bankName: string;
  accountBalance: number;
  accountName: string;
  balance: number;
  terminalRef: string | null;
}

export interface TransactionHistory extends Global {
  walletId: string;
  transactionReference: string;
  account: number;
  status: number;
  description: string;
}

export interface BankTransaction {
  global: Global;
  bankCode: string;
  bankName: string;
  bankAlias: string;
  bankLogo: string;
}
