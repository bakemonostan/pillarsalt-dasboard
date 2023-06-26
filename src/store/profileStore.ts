import { create } from "zustand";
import { merchantApi } from "../config/api";
import { ProfileStore, UserProfile } from "../types/User";
import { handleApiRequest } from "../utils/handelRequest";

// type View = "profile" | "update" | "change";

export const useProfileStore = create<ProfileStore>((set) => ({
  formFields: {
    firstName: "",
    lastName: "",
    email: "",
    contactPerson: "",
    companyName: "",
    address: "",
    phoneNumberOne: "",
    phoneNumberTwo: "",
  },
  isLoading: false,
  userProfile: {} as UserProfile,
  currentView: "profile",
  setFormField: (field, value) =>
    set((state) => ({ formFields: { ...state.formFields, [field]: value } })),

  getUserProfile: async () => {
    set({ isLoading: true });
    const apiRequest = merchantApi.get("/Configuration/get-marchant-details");
    const setState = (userProfile: {}) => set({ userProfile });
    await handleApiRequest(set, apiRequest, setState);
    set({ isLoading: false });
  },

  setView: (view) =>
    set((state) => ({
      currentView: view,
    })),
}));
