import { create } from "zustand";

interface IResetPasswordStore {
  resetPassword: boolean;
  setResetPassword: (resetPassword: boolean) => Promise<void>;
}

export const useResetPasswordStore = create((set) => ({
  resetPassword: false,
  setResetPassword: (resetPassword: boolean) => set({ resetPassword }),
}));
