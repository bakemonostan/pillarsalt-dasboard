import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import User, { UserData } from "../../types/User";
import { Actions, AuthState } from "../../types/auth";
import axios, { AxiosError } from "axios";
import { authApi } from "../../config/api";

type ServerError = { message: string };

export const useFormStore = create<User & Actions>()((state) => ({
  email: "",
  password: "",

  setEmail: (email) => state(() => ({ email })),
  setPassword: (password) => state(() => ({ password })),
  resetForm: () => state({ email: "", password: "" }),
}));

// Zustand store

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (state) => ({
        token: null,
        id: "",
        error: false,
        errorMsg: "",
        isLoggedIn: false,
        loading: false,

        login: async (user) => {
          try {
            state({ loading: true });
            state({ error: false });
            const response = await authApi.post("/Account/login", user);
            const {
              data: { token },
            } = response.data;
            const {
              data: { profileId },
            } = response.data;

            state({ token, isLoggedIn: true, loading: false, profileId });
            profileId;
          } catch (error) {
            if (axios.isAxiosError(error)) {
              state({ error: true });
              const serverError = error as AxiosError<ServerError>;
              state({ errorMsg: serverError.response?.data.message });
              state({ loading: false });
            }
          }
        },

        logout: async () => {
          sessionStorage.removeItem("token");
          axios.defaults.headers.common["Authorization"] = "";
          state({ token: null });
          state({ isLoggedIn: false });
        },
      }),

      {
        name: "auth",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);

type Email = {
  email: string;
  errorMsg?: string;
  error: boolean;
  setEmail: (password: string) => void;
  handleForgotPassword: (email: string) => void;
};

export const useResetPasswordStore = create<Email>((set) => ({
  email: "",
  errorMsg: "",
  error: false,
  setEmail: (email) => set({ email }),
  handleForgotPassword: async (email) => {
    try {
      await authApi.get(`Account/Initiate-forget-password?email=${email}`);
      set({ email: "", error: false });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        set({ error: true });
        const serverError = error as AxiosError<ServerError>;
        set({ errorMsg: serverError.response?.data.message });
      }
    }
  },
}));

type Merchant = {
  userData?: UserData;
  getUserData: (user: User) => Promise<void>;
};

export const useMerchantStore = create<Merchant>()((state) => ({
  userData: undefined,
  getUserData: async (user: User) => {
    try {
      const response = await authApi.post<UserData>("/Account/login", user);
      const userData = response?.data;
      state({ userData });
    } catch (error) {}
  },
}));
