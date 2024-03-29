import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import EmailVerified from "../../EmailVerified";
import { useDispatch } from "react-redux";
import { VerifyEmailAction } from "../../../actions/VerifyEmailAction";

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
        if (error.message === "Not authenticated") {
          setStatusText("You are not authenticated");
        } else if (error.message === "Email already verified") {
          setStatusText("This email has already been verified");
        } else if (
          error.message === "Verification link not associated with this account"
        ) {
          setStatusText(
            "This verification link is not associated with your account"
          );
        } else {
          setStatusText("An error occurred while verifying your email");
        }
        navigate("/auth/verification/resend-email/", { replace: true });
      } finally {
        console.log("Code block is executed successful");
      }
    };
    verifyToken();
  }, [token, navigate]);

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
