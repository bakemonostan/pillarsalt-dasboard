// Type definitions for tickets
export interface TicketStore {
  isLoading: boolean;
  allTickets: AllTickets[];
  ticketDetails: TicketDetails;
  getTickets: () => Promise<void>;
  getTicketById: (id: string | undefined) => Promise<void>;
  //   ticketResponse: TicketResponse;
  submitResponse: (id: string | undefined, response: any) => Promise<void>;
}

export interface AllTickets {
  id: string;
  createdAt: string;
  modifiedAt?: string;
  isDeleted?: boolean;
  createdBy?: string;
  ticketTittle?: string;
  description: string;
  phoneNumber?: string;
  email?: string;
  ticketPriority?: number;
}

export interface TickekCardProps {
  id: string;
  createdAt: string;
  modifiedAt?: string;
  isDeleted?: boolean;
  createdBy?: string;
  ticketTittle?: string;
  description?: string;
  phoneNumber?: string;
  email?: string;
  ticketPriority?: number;
}

export interface TicketDetails {
  id: string;
  createdAt: string;
  modifiedAt?: string;
  isDeleted?: boolean;
  createdBy?: string;
  ticketTittle?: string;
  description?: string;
  phoneNumber?: string;
  email?: string;
  ticketPriority?: number;
}

export interface TicketResponse {
  id: string;
  ticketTittle: string;
  description: string;
  phoneNumber: string;
  email: string;
  responseBy: string;
  respond: string;
  ticketStatus: number;
  ticketType: number;
}
