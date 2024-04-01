import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdMarkEmailUnread } from "react-icons/md";
import Meta from "../components/Meta";
import { resendVerificationEmailAction } from "../actions/resendVerificationEmailAction";
import { resendVerificationEmail } from "../api";

const EmailVerification = () => {
  const [countdown, setCountdown] = useState(30);
  const [showCountdown, setShowCountdown] = useState(false);
  const [disableResend, setDisableResend] = useState(false);
  const [resendError, setResendError] = useState(null);
  const dispatch = useDispatch();

  const handleResend = async () => {
    try {
      await dispatch(resendVerificationEmailAction());
      setShowCountdown(true);
      setDisableResend(true);
      setCountdown(30);
    } catch (error) {
      console.error("Error resending email:", error);
      setResendError(`${error.response?.request?.status} : ${error.message}`);
    }
  };

  useEffect(() => {
    let timer;
    if (showCountdown && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown, showCountdown]);

  useEffect(() => {
    if (countdown === 0) {
      setDisableResend(false);
      setShowCountdown(false);
    }
  }, [countdown]);

  return (
    <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden flex justify-center bg-versich-primary-bg items-center">
      <Meta
        title="Email Verification"
        description="Proceed to verify your email address"
      />
      <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md">
        <h2 className="font-bold text-2xl mb-5">Email Verification</h2>
        <div className="text-6xl pb-5 flex justify-center text-versich-blue">
          <MdMarkEmailUnread />
        </div>
        <p className="text-center mb-5">
          Kindly check your email inbox or spam folder to verify your email
          address.
        </p>
        <p className="text-center">
          Click{" "}
          <button
            className="text-versich-blue underline"
            onClick={handleResend}
            disabled={disableResend}
          >
            here
          </button>{" "}
          to resend Verification Link.
        </p>
        {resendError && (
          <p className="text-center text-red-500">{resendError}</p>
        )}
        {showCountdown && (
          <p className="text-center">Resend email in {countdown}s.</p>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
