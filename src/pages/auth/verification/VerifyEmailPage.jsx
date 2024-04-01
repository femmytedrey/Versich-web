import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VerifyEmailAction } from "../../../actions/VerifyEmailAction";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Meta from "../../../components/Meta";


export default function VerifyEmailPage() {
  const [isVerified, setIsVerified] = useState(false);
  const [statusText, setStatusText] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await dispatch(VerifyEmailAction(token));
        if (!isVerified) {
          setStatusText("Error verifying this email");
        }
        console.log("Token Extracted Successfully");
        setIsVerified(true);
        setStatusText("Your email has been verified successfully!");
        navigate(`/api/auth/verify/account/${token}`);
      } catch (error) {
        console.error(error);
        const message = error?.message
          ? JSON.parse(error.message)?.message ||
            "An error occurred while verifying the email."
          : "An error occurred while verifying the email.";
        setStatusText(message);
        if (error.response && error.response.status === 404) {
          navigate("/auth/verification/resend-email/", { replace: true });
        }
      } finally {
        console.log("Code block is executed successful");
      }
    };
    verifyToken();
  }, [token, navigate, dispatch]);

  return (
    <div>
      {isVerified ? (
        <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden flex justify-center bg-versich-primary-bg items-center">
          <Meta title="Email Error" description="Verification Successful" />
          <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md">
            <h2 className="font-bold text-2xl mb-5">Email Verified</h2>
            <div className="text-6xl pb-5 flex justify-center text-versich-blue">
              <MdOutlineMarkEmailRead />
            </div>
            <p className="text-center mb-5">{statusText}</p>
          </div>
        </div>
      ) : (
        <p>Verifying...</p>
      )}
    </div>
  );
}
