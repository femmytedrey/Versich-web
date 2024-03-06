import { Link } from "react-router-dom";

const EmailVerification = () => {
    const emailResend = () => {
        return alert('Email resent')
    }
  return (
    <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden flex justify-center  bg-versich-primary-bg items-center">
        <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md">
            <h2 className="font-bold text-2xl mb-5">Email Verification</h2>
            <p className="text-center mb-5">
                Kindly check your email inbox or spam folder to verify your email address.
            </p>
            <p className="text-center">
                If you didn't receive any email, you can click{' '}
                <Link to="/auth/resend-verification" className="text-versich-blue underline" onClick={emailResend}>
                here
                </Link>{' '}
                to resend the verification email.
            </p>
        </div>
    </div>
    
  );
}

export default EmailVerification;
