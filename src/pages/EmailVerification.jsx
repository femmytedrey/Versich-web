import React, { useState, useEffect } from 'react';

const EmailVerification = () => {
  const [countdown, setCountdown] = useState(30);
  const [disableResend, setDisableResend] = useState(false);

  const emailResend = () => {
    // Simulate email resend (replace with actual logic)
    alert('Email resent');
    // Disable the button and start the countdown again
    setDisableResend(true);
    setCountdown(30);
  };

  useEffect(() => {
    let interval;

    if (countdown > 0 && disableResend) {
      interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown, disableResend]);

  return (
    <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden flex justify-center bg-versich-primary-bg items-center">
      <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md">
        <h2 className="font-bold text-2xl mb-5">Email Verification</h2>
        <p className="text-center mb-5">
          Kindly check your email inbox or spam folder to verify your email address.
        </p>
        <p className="text-center">
          {countdown > 1 ? (
            <>
              Resend in {countdown} seconds.{' '}
              <button
                className="text-versich-blue underline"
                onClick={emailResend}
                disabled={disableResend}
              >
                Click here
              </button>{' '}
              to resend.
            </>
          ) : (
            <>
              Resend in 1 second.{' '}
              <button
                className="text-versich-blue underline"
                onClick={emailResend}
                disabled={disableResend}
              >
                Click here
              </button>{' '}
              to resend.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
