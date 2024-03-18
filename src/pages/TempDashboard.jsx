import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CircularProgressBar from "../components/CircularProgressBar";
import ConfirmButton from "../components/Buttons/ConfirmButton";
import { CiLocationOn } from "react-icons/ci";
import { GoRead } from "react-icons/go";
import { GoUnread } from "react-icons/go";
import Meta from "../components/Meta";

const TempDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  // const [progress, setProgress] = useState(75);
  const progress = useSelector((state) => state.progress.value);

  const editBtn = () => {
    console.log("Testing Edit btn");
  };

  const getProfileLink = () => {
    if (progress < 50) {
      return "/leads";
    } else if (progress < 75) {
      return "/profile";
    } else {
      return "/more-leads";
    }
  };

  return (
    <div className="bg-versich-primary-bg px-6 md:px-16 lg:px-28 space-y-4 py-10">
      <Meta title='Temporary Dashboard' description='This page is temporary' />
      <div className="bg-white w-full px-4 font-semibold py-6 text-start shadow-lg text-versich-dark-blue rounded-xl flex justify-between flex-col sm:flex-row">
        <p>Good Afternoon, John!</p>
        <Link
          to="/auth/verification/YOUR_TOKEN/email/"
          className="text-versich-blue underline hover:text-versich-blue-hover"
        >
          Verify Email
        </Link>
      </div>
      <div className="flex flex-col xl:flex-row gap-x-6 gap-y-5">
        <div className="bg-white shadow-lg px-4 py-4 rounded-xl h-[325px] flex-1">
          <div className="flex gap-x-3 items-center ">
            <div className="rounded-full text-white text-xl font-semibold bg-versich-light-blue h-16 w-16 flex justify-center items-center">
              JA
            </div>
            <div className="flex-1 text-start text-versich-dark-blue font-semibold text-lg">
              <p>John Ade</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-3 py-4 bg-[#D9EBFC] my-4 rounded-lg">
            <div>
              <CircularProgressBar progress={progress} />
            </div>
            <div>
              {progress < 100 ? (
                <p>
                  Complete your profile {""}
                  <span>
                    <Link
                      to={getProfileLink()}
                      className="text-versich-blue underline"
                    >
                      here
                    </Link>
                  </span>
                </p>
              ) : (
                <p>Your profile is completed</p>
              )}
            </div>
          </div>
          <div className="w-40">
            <ConfirmButton
              type="submit"
              text="Edit profile"
              clickHandler={editBtn}
            />
          </div>
        </div>

        {/* Lead Settings */}
        <div className="bg-white shadow-lg px-4 py-4 rounded-xl space-y-4 text-start h-[435px] xl:h-[400px] flex-1">
          <div>
            <p className="text-start text-xl font-semibold text-versich-dark-blue">
              Lead setting
            </p>
          </div>

          <div>
            <div>
              <p className="text-versich-dark-blue font-medium mb-1">
                Services
              </p>
              <p className="text-sm text-versich-label mb-1">
                You’ll receive leads in these categories
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="border-[1px] border-versich-border text-xs md:text-sm text-versich-border rounded-xl px-3 py-2 hover:bg-versich-blue hover:text-white">
                Mobile app
              </button>
              <button className="border-[1px] border-versich-border text-xs md:text-sm text-versich-border rounded-xl px-3 py-2 hover:bg-versich-blue hover:text-white">
                Software development
              </button>
            </div>
          </div>

          <div>
            <div>
              <p className="text-versich-dark-blue font-medium mb-1">
                Location
              </p>
              <p className="text-sm text-versich-label mb-1">
                You’re receiving customers within
              </p>
            </div>
            <div className="flex items-center gap-x-1 mb-3">
              <CiLocationOn />
              <p className="text-sm">Worldwide</p>
            </div>
            <div>
              <div className="flex flex-col gap-y-1">
                <p>Estimated 103 leads per day</p>
                <p className="text-versich-blue underline underline-offset-2 cursor-pointer">
                  info@user.com
                </p>
              </div>
              <div className="flex items-center gap-x-1 mb-3">
                <CiLocationOn />
                <p className="text-sm">Worldwide</p>
              </div>
            </div>
            <div className="w-40">
              <ConfirmButton
                type="submit"
                text="Edit setting"
                // clickHandler={editBtn}
              />
            </div>
          </div>
        </div>

        {/* For Leads | Responses | Help */}
        <div className="space-y-4 flex-1">
          <div className="bg-white shadow-lg px-4 py-4 rounded-xl space-y-4 text-start">
            <div>
              <p className="text-start text-xl font-semibold text-versich-dark-blue">
                Leads
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-[#D9EBFC] rounded-full p-3 text-versich-dark-blue">
                <GoRead />
              </div>
              <div className="text-sm">833 leads</div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-[#D9EBFC] rounded-full p-3 text-versich-dark-blue">
                <GoUnread />
              </div>
              <div className="text-sm">833 unread leads</div>
            </div>
            <div className="w-40">
              <ConfirmButton
                type="submit"
                text="View leads"
                // clickHandler={editBtn}
              />
            </div>
          </div>

          <div className="bg-white shadow-lg px-4 py-4 rounded-xl space-y-4 text-start">
            <div>
              <p className="text-start text-xl font-semibold text-versich-dark-blue">
                Responses
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-[#D9EBFC] rounded-full p-3 text-versich-dark-blue">
                <GoRead />
              </div>
              <div className="text-sm">8 Responses</div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-[#D9EBFC] rounded-full p-3 text-versich-dark-blue">
                <GoUnread />
              </div>
              <div className="text-sm">Unread message and request</div>
            </div>
            <div className="w-40">
              <ConfirmButton
                type="submit"
                text="View responses"
                // clickHandler={editBtn}
              />
            </div>
          </div>

          <div className="bg-white shadow-lg px-4 py-4 rounded-xl space-y-4 text-start">
            <div>
              <p className="text-start text-xl font-semibold text-versich-dark-blue">
                Help
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-[#D9EBFC] rounded-full p-3 text-versich-dark-blue">
                <GoRead />
              </div>
              <div className="text-sm">
                Email{" "}
                <span className="text-versich-blue underline underline-offset-2">
                  team@versichmarket.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-[#D9EBFC] rounded-full p-3 text-versich-dark-blue">
                <GoUnread />
              </div>
              <div className="text-sm">
                Call{" "}
                <span className="text-versich-blue underline underline-offset-2">
                  112 2354 8898
                </span>{" "}
                open 24 hours a day, 7 days a week
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempDashboard;
