
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
} from "../pages";
import RootLayout from "../components/Layout/RootLayout";
import ProtectedRoutes from "../components/Guards/ProtectedRoutes";
import PublicRoutes from "../components/Guards/PublicRoutes";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route element={<ProtectedRoutes redirectRoute="/login" />}>
          <Route index element={<Home />} />
          <Route path="branch" element={<Branch />} />
          <Route path="profile" element={<Profile />} />
          <Route path="support" element={<Support />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="branch/branch-location" element={<BranchLocation />} />
          <Route path="branch/branch-report" element={<BranchReport />} />
          <Route path="branch/" element={<BranchTranactions />} />
        </Route>
      </Route>
      <Route path="/login">
        <Route element={<PublicRoutes redirectRoute="/" />}>
          <Route index element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="setup-password" element={<SetupPassword />} />
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
