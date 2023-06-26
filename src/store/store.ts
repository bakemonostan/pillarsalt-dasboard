import { create } from "zustand";
import { merchantApi } from "../config/api";

interface TestStore {
  isOpen: boolean;
  showSidebar: () => void;
  closeSidebar: () => void;
}

export const useTestStore = create<TestStore>((set) => ({
  isOpen: false,
  showSidebar: () => set((state) => ({ isOpen: true })),
  closeSidebar: () => set((state) => ({ isOpen: false })),
}));

interface fetch {
  isLoading: boolean;
  data: any;
  error: any;
  fetchData: (endpoint: string) => Promise<void>;
}

export const useMerchantFetch = create<fetch>((state) => ({
  isLoading: false,
  data: [],
  error: null,
  fetchData: async (endpoint: string) => {
    try {
      state({ isLoading: true });
      const response = await merchantApi.get(endpoint);
      const responseData = response?.data;
      state({ data: responseData, error: null });
    } catch (error) {
      state({ error, data: null });
    } finally {
      state({ isLoading: false });
    }
  },
}));
