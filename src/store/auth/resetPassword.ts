import { create } from "zustand";
import { merchantApi } from "../../config/api";
import { handleApiRequest } from "../../utils/handelRequest";

interface IResetPasswordStore {
  newPassword: string;
  setResetPassword: (newPassword: string) => Promise<void>;
}

export const useResetPasswordStore = create<IResetPasswordStore>((set) => ({
  newPassword: "",
  setResetPassword: async (newPassword: string) => {
    const apiRequest = merchantApi.post("/Auth/reset-password", {
      newPassword,
    });
    const setState = (resetPassword: boolean) => set({ newPassword });
    await handleApiRequest(set, apiRequest, setState);
  },
}));
