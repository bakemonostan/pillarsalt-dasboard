import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";
import User, { UserData } from "../../types/User";
import { Actions, AuthState } from "../../types/auth";
import axios from "axios";
import { authApi, merchantApi } from "../../config/api";

export const useFormStore = create<User & Actions>()((state) => ({
  email: "soscreation2020@gmail.com",
  password: "Qwerty123456*",
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
        isLoggedIn: false,
        loading: false,

        login: async (user) => {
          try {
            state({ loading: true });
            // Make the API request to the server
            const response = await authApi.post("/Account/login", user);

            const {
              data: { token },
            } = response.data;
            const {
              data: { profileId },
            } = response.data;

            state({ token, isLoggedIn: true, loading: false, profileId });
            console.log(profileId);
          } catch (error) {
            // Handle any errors that occurred during the request
            console.error("Login failed:", error);
            state({ loading: false });
          }
        },

        logout: async () => {
          localStorage.removeItem("token");
          axios.defaults.headers.common["Authorization"] = "";
          state({ token: null });
          state({ isLoggedIn: false });
        },
      }),

      {
        name: "auth",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

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
    } catch (error) {
      console.error("GetUserData failed:", error);
    }
  },
}));
