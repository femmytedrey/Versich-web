import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../../pages/home/Home";
import Signup from "../../pages/auth/Signup";
import Login from "../../pages/auth/Login";
import GoogleOAuthVerification from "../../pages/auth/verification/GoogleOAuthVerification";
import Dashboard from "../../pages/dashboard/Dashboard";
import NotAuthRoutes from "./NotAuthRoutes";
import AuthRoutes from "./AuthRoutes";
import { buyerPaths, loginPath, sellerPaths } from "../../assets/constants";
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
import ErrorPage from "../ErrorPage/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "../../actions/auth";

const AllRoutes = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth()); // Dispatch checkAuth action
    if (isAuthenticated) {
      console.log("User is authenticated"); // Log when user is authenticated
    } else {
      console.log("user is not authenticated");
    }
  }, [dispatch, isAuthenticated]);
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Home />} />
        {/* Temporary routes */}
        {isAuthenticated && user.account_type ==='seller' ? (
          <Route path="tempdashboard/" element={<TempDashboard />} />
        ) : (
          <Route path="*" element={<Navigate to="/error/403" />} />
        )}
        {/* <Route path="steppers/" element={<Steppers />} /> */}
        {/* <Route path="as" element={<AccountSelection />} /> */}
        {/* <Route path="leads" element={<LeadsForm />} />
                <Route path="profile" element={<ProfileForm />} />
                <Route path="more-leads" element={<MoreLeadsForm />} /> */}
        <Route path="response" element={<Response />} />
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
          <Route
            path="verification/:token/email/"
            element={<EmailVerification />}
          />
          <Route path="verification/email/" element={<EmailVerified />} />
          <Route path="su/">
            {user && (
              <>
                {user.account_type === "seller" && (
                  <>
                    {console.log("Rendering seller routes", user.account_type)}
                    <Route path={sellerPaths.leads} element={<LeadsForm />} />
                    <Route
                      path={sellerPaths.profile}
                      element={<ProfileForm />}
                    />
                    <Route
                      path={sellerPaths.moreleads}
                      element={<MoreLeadsForm />}
                    />
                  </>
                )}

                {console.log("User in su route:", user.account_type)}
                {user.account_type === "buyer" && (
                  <>
                    {console.log("Rendering buyer routes", user.account_type)}
                    <Route path={buyerPaths.leads} element={<LeadsForm />} />
                    <Route
                      path={buyerPaths.profile}
                      element={<ProfileForm />}
                    />
                    <Route
                      path={buyerPaths.moreleads}
                      element={<MoreLeadsForm />}
                    />
                  </>
                )}
              </>
            )}
            {/* {accountType === "buyer" ? (
              <>
                <Route path={buyerPaths.leads} element={<LeadsForm />} />
                <Route path={buyerPaths.profile} element={<ProfileForm />} />
                <Route
                  path={buyerPaths.moreleads}
                  element={<MoreLeadsForm />}
                />
              </>
            ) : accountType === "seller" ? (
              <>
                <Route path={sellerPaths.leads} element={<LeadsForm />} />
                <Route path={sellerPaths.profile} element={<ProfileForm />} />
                <Route
                  path={sellerPaths.moreleads}
                  element={<MoreLeadsForm />}
                />
              </>
            ) : null} */}
          </Route>
        </Route>
      </Route>
      <Route path="dashboard/" element={<AuthRoutes />}>
        <Route path="" element={<Dashboard />} />
      </Route>
      {/* Render a errorpage */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
      <Route path="error/:status" element={<ErrorPage />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Routes>
  );
};
export default AllRoutes;
