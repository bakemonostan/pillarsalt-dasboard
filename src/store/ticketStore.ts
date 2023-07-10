import { create } from "zustand";
import { merchantApi } from "../config/api";
import { handleApiRequest } from "../utils/handelRequest";
import { TicketStore, AllTickets, TicketDetails } from "../types/tickets";

export const useTicketStore = create<TicketStore>((state) => ({
  isLoading: false,
  allTickets: [],
  ticketDetails: {} as TicketDetails,
  getTickets: async () => {
    state({ isLoading: true });
    const apiRequest = merchantApi.get("Ticket/get-all-ticket");
    const setState = (allTickets: AllTickets[]) => {
      state({ allTickets });
    };
    await handleApiRequest(state, apiRequest, setState);
    state({ isLoading: false });
  },

  getTicketById: async (id: string | undefined) => {
    state({ isLoading: true });
    const apiRequest = merchantApi.get(`Ticket/get-ticket-byid?Id=${id}`);
    const setState = (ticketDetails: TicketDetails) => {
      state({ ticketDetails });
    };
    await handleApiRequest(state, apiRequest, setState);
    state({ isLoading: false });
  },

  submitResponse: async (id: string | undefined, response: any) => {
    state({ isLoading: true });
    const apiRequest = merchantApi.post(`Ticket/ticket-respond`, { response });
  },
}));
