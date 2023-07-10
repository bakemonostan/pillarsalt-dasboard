import { create } from "zustand";

type modalType = "fund" | "withdraw";
interface ModalStore {
  isFundWallet?: boolean;
  isWithdraw?: boolean;
  modalType: modalType;
  showModal: (type: modalType) => void;
  closeModal: (type: modalType) => void;
}

export const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  modalType: "fund",
  showModal: (type: modalType) => {
    if (type === "fund") {
      set({ isFundWallet: true });
    }
    if (type === "withdraw") {
      set({ isWithdraw: true });
    }
    return;
  },

  closeModal: (type: modalType) => {
    if (type === "fund") {
      set({ isFundWallet: false });
    }
    if (type === "withdraw") {
      set({ isWithdraw: false });
    }
    return;
  },
}));
