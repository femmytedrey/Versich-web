import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VerifyEmailAction } from "../../../actions/emailVerificationActions";
import EmailVerified from "../../EmailVerified";

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
        <EmailVerified statusText={statusText} />
      ) : (
        <p>Verifying...</p>
      )}
    </div>
  );
}
