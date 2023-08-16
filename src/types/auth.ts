import User, { UserData } from "./User";

export interface AuthState {
  token?: string | null;
  loading?: boolean;
  error?: boolean;
  errorMsg?: string;
  isLoggedIn?: boolean;
  profileId?: string;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
  random?: () => Promise<void>;
}

export interface Actions {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  resetForm: () => void;
}
