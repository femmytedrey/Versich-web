import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { verifyEmail, getUser } from "../../../api";
import { useSelector } from "react-redux"; 

export default function VerifyEmailPage() {
  const [error, setError] = useState(null);
  const { token } = useParams();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.user.email); 

  useEffect(() => {
    const verifyToken = async () => {
      try {
        if (!userEmail) {
          await getUser();
        }

        const emailVerified = await verifyEmailOwnership(token, userEmail);
        if (!emailVerified) {
          setError("You are not authorized to verify this email address.");
          return;
        }

        await verifyEmail(token);
        console.log("Token Extracted Successfully");
        navigate("/auth/verification/email-verified", { replace: true });
      } catch (error) {
        console.error(error);
        setError("An error occurred while verifying the email.");
        navigate("/auth/verification/resend-email/", { replace: true });
      } finally {
        console.log("Code block is executed successful");
      }
    };

    verifyToken();
  }, [token, navigate, userEmail]);

  return (
    <div>
      <h1>Verify Email...</h1>
      {error && <p>{error}</p>}
    </div>
  );
}

async function verifyEmailOwnership(token, userEmail) {
  try {
    const response = await fetch(`/api/verify/${token}`);
    const data = await response.json();
    const tokenEmail = data.email;

    return tokenEmail === userEmail;
  } catch (error) {
    console.error("Error verifying email ownership:", error);
    return false;
  }
}
