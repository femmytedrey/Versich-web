import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../pages/home/Home";
import Signup from "../../pages/auth/Signup";
import Login from "../../pages/auth/Login";
import GoogleOAuthVerification from "../../pages/auth/verification/GoogleOAuthVerification";
import EmailVerification from "../../pages/EmailVerification";
import LeadsForm from "../../pages/LeadsForm";
import MoreLeadsForm from "../../pages/MoreLeadsForm";
import ProfileForm from "../../pages/ProfileForm";
import ErrorPage from "../ErrorPage/ErrorPage";
import EmailVerified from "../../pages/EmailVerified";
import Dashboard from "../../pages/dashboard/Dashboard";
import NotAuthRoutes from "./NotAuthRoutes";
import AuthRoutes from "./AuthRoutes";
import BuyerRoutes from "./BuyerRoutes";
import SellerRoutes from "./SellerRoutes";
import { loginPath } from "../../assets/constants";
import VerifyEmailPage from "../../pages/auth/verification/VerifyEmailPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/auth/">
        <Route element={<NotAuthRoutes />}>
          <Route path="" element={<Navigate to={loginPath} replace />} />
          <Route path="login/" element={<Login />} />
          <Route path="signup/" element={<Signup />} />
          <Route
            path="social-accounts/verify/google-oauth2/"
            element={<GoogleOAuthVerification />}
          />
        </Route>
        <Route element={<AuthRoutes />}>
          <Route path="verification/:token/email" element={<VerifyEmailPage />} />

          {/* This EmailVerification is for the resend */}
          <Route
            path="verification/resend-email/"
            element={<EmailVerification />}
          />
          <Route path="verification/email-verified" element={<EmailVerified />} />
          <Route path="su/">
            <Route path="buyer/" element={<BuyerRoutes />}>
              <Route path="leads/" element={<LeadsForm />} />
              <Route path="profile/" element={<ProfileForm />} />
              <Route path="more-leads/" element={<MoreLeadsForm />} />
            </Route>
            <Route path="seller/" element={<SellerRoutes />}>
              <Route path="leads/" element={<LeadsForm />} />
              <Route path="profile/" element={<ProfileForm />} />
              <Route path="more-leads/" element={<MoreLeadsForm />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="dashboard/" element={<AuthRoutes />}>
        <Route path="" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<ErrorPage status={404} />} />
    </Routes>
  );
};
export default AllRoutes;
