import { Link } from "react-router-dom";

const EmailVerification = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 min-h-80">
      <h2 className="font-bold text-2xl mb-5">Email Verification</h2>
      <p className="text-center mb-5">
        An email verification has been sent to your email address. Please click the link in the email to verify your account.
      </p>
      <p className="text-center">
        If you didn't receive any email, you can click{' '}
        <Link to="/auth/resend-verification" className="text-versich-blue underline">
          here
        </Link>{' '}
        to resend the verification email.
      </p>
    </div>
  );
}

export default EmailVerification;
