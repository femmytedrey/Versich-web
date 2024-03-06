import { useState, useEffect } from "react";

const EmailVerification = () => {
  const [countdown, setCountdown] = useState(30);
  const [showCountdown, setShowCountdown] = useState(false);
  const [disableResend, setDisableResend] = useState(false);

  const emailResend = () => {
    alert('Email resent');
    setShowCountdown(true);
    setDisableResend(true);
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
      <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md">
        <h2 className="font-bold text-2xl mb-5">Email Verification</h2>
        <p className="text-center mb-5">
          Kindly check your email inbox or spam folder to verify your email address.
        </p>
        <p className="text-center">
          Click{' '}
          <button
            className="text-versich-blue underline"
            onClick={emailResend}
            disabled={disableResend}
          >
            here
          </button>{' '}
          to resend.
        </p>
        {showCountdown && (
          <p className="text-center">
            Resend email in {countdown}s.
          </p>
        )}
      </div>
    </div>
  );
}

export default EmailVerification;
