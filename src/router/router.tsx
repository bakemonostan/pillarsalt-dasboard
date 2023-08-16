
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  Home,
  Branch,
  ForgotPassword,
  Login,
  Profile,
  SetupPassword,
  Support,
  Wallet,
  BranchLocation,
  BranchReport,
  BranchTranactions,
  NewTicket,
  TickectDetails,
  VerifyEmail,
  VerifiedEmail
} from "../pages";
import RootLayout from "../components/Layout/RootLayout";
import ProtectedRoutes from "../components/Guards/ProtectedRoutes";
import PublicRoutes from "../components/Guards/PublicRoutes";
import ErrorPage from "../components/Error/ErrorPage";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route element={<ProtectedRoutes redirectRoute="/login" />}>
          <Route index element={<Home />} />
          <Route path="branch" element={<Branch />} />
          <Route path="profile" element={<Profile />} />
          <Route path="support" element={<Support />} />
          <Route path="support/:id" element={<TickectDetails />} />
          <Route path="support/new-ticket" element={<NewTicket />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="branch/branch-location" element={<BranchLocation />} />
          <Route path="branch/branch-report" element={<BranchReport />} />
          <Route path="branch/" element={<BranchTranactions />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Route>
      <Route path="/login">
        <Route element={<PublicRoutes redirectRoute="/" />}>
          <Route index element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="setup-password" element={<SetupPassword />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="verified-email" element={<VerifiedEmail />} />
        </Route>
      </Route>
    </>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: Home,
//   },
// ]);
