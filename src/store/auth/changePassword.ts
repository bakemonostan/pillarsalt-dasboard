import { create } from "zustand";
import { authApi } from "../../config/api";

interface IChangePasswordStore {
  passwords: {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  isloading: boolean;
  error: boolean;
  errorMessage: string;
  setOldPassword: (value: string) => void;
  setNewPasswordValue: (value: string) => void;
  setConfirmPassword: (value: string) => void;
  setNewPassword: (
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
  ) => Promise<void>;
}

export const useChangePasswordStore = create<IChangePasswordStore>((set) => ({
  passwords: {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  },
  isloading: false,
  error: false,
  errorMessage: "",

  setOldPassword: (value: string) => {
    set((state) => ({
      passwords: {
        ...state.passwords,
        oldPassword: value,
      },
    }));
  },

  setNewPasswordValue: (value: string) => {
    set((state) => ({
      passwords: {
        ...state.passwords,
        newPassword: value,
      },
    }));
  },

  setConfirmPassword: (value: string) => {
    set((state) => ({
      passwords: {
        ...state.passwords,
        confirmPassword: value,
      },
    }));
  },
  setNewPassword: async (
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
  ) => {
    if (newPassword === confirmPassword) {
      try {
        set({ isloading: true });
        const response = await authApi.post("/Account/change-password", {
          oldPassword: oldPassword,
          newPassword: newPassword,
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
    if (newPassword !== confirmPassword) {
      set({ error: true });
      set({ errorMessage: "Password does not match" });
      setTimeout(() => {
        set({ error: false });
      }, 3000);
    }
  },
}));
