import { create } from "zustand";
import { authApi } from "../../config/api";

interface ISetupPasswordStore {
  password: string;
  confirmPassword: string;
  error: boolean;
  errorMessage?: string;
  isloading: boolean;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setUpPassword: (
    email: string | null,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
}

export const useSetupPasswordStore = create<ISetupPasswordStore>((set) => ({
  password: "",
  confirmPassword: "",
  isloading: false,
  error: false,
  errorMessage: "",
  setPassword: (password: string) => set({ password }),
  setConfirmPassword: (confirmPassword: string) => set({ confirmPassword }),
  setUpPassword: async (email, password, confirmPassword) => {
    if (password === confirmPassword) {
      try {
        set({ isloading: true });
        const response = await authApi.post("/Account/setup-password", {
          userId: email,
          password: password,
          confirmPassword: confirmPassword,
        });
        const { data } = response.data;
        set({ error: false });
        set({ isloading: false });
        console.log(data);
      } catch (error) {
        set({ error: true });
        set({ errorMessage: "Network Error, please try again later" });
        setTimeout(() => {
          set({ error: false });
        }, 3000);
        console.log(error);
      }
    }
    if (password !== confirmPassword) {
      set({ error: true });
      set({ errorMessage: "Password does not match" });
      setTimeout(() => {
        set({ error: false });
      }, 3000);
    }
  },
}));
