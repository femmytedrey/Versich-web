import { MdOutlineMarkEmailRead } from "react-icons/md";
import Meta from "../components/Meta";

const EmailVerified = () => {
  return (
    <div className="py-10 md:py-14 px-3 mb-12 overflow-hidden flex justify-center bg-versich-primary-bg items-center">
      <Meta title="Email Verified" description="Verification Successful" />
      <div className="w-full bg-white shadow-md py-5 md:py-10 px-3 md:px-10 max-w-[580px] rounded-md">
        <h2 className="font-bold text-2xl mb-5">Email Verified</h2>
        <div className="text-6xl pb-5 flex justify-center text-versich-blue">
          <MdOutlineMarkEmailRead />
        </div>
        <p className="text-center mb-5">Your email has been verified successfully!</p>
      </div>
    </div>
  );
};

export default EmailVerified;
