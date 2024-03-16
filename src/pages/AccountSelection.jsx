import Meta from "../components/Meta";

const AccountSelection = () => {
  return (
    <div className="py-10 md:py-14 mb-12 px-3 overflow-hidden flex justify-center  bg-versich-primary-bg items-center">
      <Meta title="Account Selection" description="Account type selection" />
      <div className="w-full bg-white shadow-md py-5 md:py-10 px-5 md:px-12 max-w-[580px] rounded-md">
        <h2 className=" text-2xl leading-normal text-left mb-5 text-versich-darktext-color font-medium ">
          Join as a buyer or seller
        </h2>
        <div>
          <div>
            <label>
              <input type="radio" />
            </label>
          </div>
          <div>
            <label>
              <input type="radio" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSelection;
