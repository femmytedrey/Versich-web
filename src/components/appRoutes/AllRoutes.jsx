import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../pages/home/Home";
import Signup from "../../pages/auth/Signup";
import Login from "../../pages/auth/Login";
import GoogleOAuthVerification from "../../pages/auth/verification/GoogleOAuthVerification"
// import AccountSelection from "../../pages/auth/setup/AccountSelection"
import Dashboard from "../../pages/dashboard/Dashboard";
import NotAuthRoutes from "./NotAuthRoutes";
import AuthRoutes from "./AuthRoutes";
import { loginPath } from "../../assets/constants";
import Steppers from "../../pages/Steppers";
// import MoreLeadsForm from "../../pages/MoreLeadsForm";
// import ProfileForm from "../../pages/ProfileForm";
// import LeadsForm from "../../pages/LeadsForm";
import EmailVerification from "../../pages/EmailVerification";
import EmailVerified from "../../pages/EmailVerified";
import TempDashboard from "../../pages/TempDashboard";
import LeadsForm from "../../pages/LeadsForm";
import Response from "../../pages/dashboard/Response";
import MoreLeadsForm from "../../pages/MoreLeadsForm";
import ProfileForm from "../../pages/ProfileForm";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="" element={<Home />} />
                {/* Temporary preview for sam to see */}
                {/* Temporary routes */}
                <Route path="steppers/" element={<Steppers />} />
                <Route path="tempdashboard/" element={<TempDashboard />} />
                <Route path="leads" element={<LeadsForm />} />
                <Route path="profile" element={<ProfileForm />} />
                <Route path="more-leads" element={<MoreLeadsForm />} />
                <Route path='response' element={<Response />} />
                <Route path="signup/" element={<Signup />} />
            </Route>
            <Route path="/auth/">
                <Route element={<NotAuthRoutes />}>
                    <Route path="" element={<Navigate to={loginPath} replace />} />
                    <Route path="login/" element={<Login />} />
                    {/* <Route path="signup/" element={<Signup />} /> */}
                    <Route path="social-accounts/verify/google-oauth2/" element={<GoogleOAuthVerification />} />
                </Route>
                <Route element={<AuthRoutes />}>
                    <Route
                        path="verification/:token/email/"
                        element={<EmailVerification />}
                    />
                    <Route
                        path="verification/email/"
                        element={<EmailVerified />}
                    />
                    {/* <Route path="su/">
            <Route path="" element={<AccountSelection />} />
            <Route path="sp/">
              <Route path="" element={<ServiceProvider />} />
              <Route path="leads/" element={<LeadsForm />} />
              <Route path="profile/" element={<ProfileForm />} />
              <Route path="more-leads/" element={<MoreLeadsForm />} />
            </Route>
          </Route> */}
                </Route>
            </Route>
            <Route path="dashboard/" element={<AuthRoutes />}>
                <Route path="" element={<Dashboard />} />
            </Route>
            {/* Render a errorpage */}
            {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
    );
};
export default AllRoutes;
