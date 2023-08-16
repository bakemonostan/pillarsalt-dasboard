export default interface User {
  email?: string;
  password?: string;
}

export interface UserData {
  data: {
    expires: number;
    userType: string;
    isRegistrationVerified: string;
    profileCode: string;
    fullName: string;
    profileId: string;
    email: string;
  };
}

type View = "profile" | "update" | "change";

export interface ProfileStore {
  formFields: {
    firstName: string;
    lastName: string;
    email: string;
    contactPerson: string;
    companyName: string;
    address: string;
    phoneNumberOne: string;
    phoneNumberTwo: string;
  };
  isLoading: boolean;
  userProfile: UserProfile;
  currentView: View;
  setFormField: (field: string, value: string) => void;
  setView: (view: View) => void;
  getUserProfile: () => Promise<void>;
}

export interface UserProfile {
  id?: number;
  createdAt?: string;
  modifiedAt?: string;
  isDeleted?: boolean;
  createdBy?: null;
  acquirerId?: number;
  merchantRef?: string;
  contactPerson?: string;
  companyName?: string;
  address?: string;
  email?: string;
  phone1?: string;
  phone2?: string;
  userId?: string;
  fax?: null;
  visible?: boolean;
  verified?: boolean;
  enable?: boolean;
  lastModified?: string;
}

// "status": true,
// "message": "Operation Successful",
// "data": {
//   "id": 32,
//   "createdAt": "0001-01-01T00:00:00+00:00",
//   "modifiedAt": "0001-01-01T00:00:00+00:00",
//   "isDeleted": false,
//   "createdBy": null,
//   "acquirerId": 3002,
//   "merchantRef": "0973664YM",
//   "contactPerson": "Suraju",
//   "companyName": "PILLARSALT SOLUTIONS",
//   "address": "OBAWOLE CLOSE, IJU FAGBA",
//   "email": "soscreation2020@gmail.com",
//   "phone1": "08063577223",
//   "phone2": "+2347067530660",
//   "userId": "soscreation2020@gmail.com",
//   "fax": null,
//   "visible": false,
//   "verified": false,
//   "enable": false,
//   "lastModified": "0001-01-01T00:00:00",
//   "status": false
