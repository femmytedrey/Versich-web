import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CircularProgressBar from "../../components/CircularProgressBar";
import ConfirmButton from "../../components/Buttons/ConfirmButton";

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);

  if (!user || typeof user !== 'object' || !user.first_name || !user.last_name) {
    return (
      <div className="flex flex-col items-center justify-center my-10 min-h-80">
        <h2 className="font-bold">Loading...</h2>
      </div>
    );
  }

  const editBtn = () => {
    console.log("Testing Edit btn");
  };

  const initials = `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`;

  return (
    <div className="bg-versich-primary-bg mx-10 md:mx-16 lg:mx-28 space-y-4 py-10">
      <div className="bg-white w-full px-4 font-semibold py-6 text-start shadow-lg text-versich-dark-blue rounded-xl flex justify-between">
        <p>Good Afternoon, {user.first_name}!</p>
        <Link
         to="/auth/verification/YOUR_TOKEN/email/"
         className="text-versich-blue underline hover:text-versich-blue-hover"
       >
         Verify Email
       </Link>
      </div>
      <div>
        <div className="bg-white shadow-lg px-4 py-4 rounded-xl">
          <div className="flex gap-x-3 items-center ">
            <div className="rounded-full text-white text-xl font-semibold bg-versich-light-blue h-16 w-16 flex justify-center items-center">
              {initials}
            </div>
            <div className="flex-1 text-start text-versich-dark-blue font-semibold text-lg">
              <p>{user.first_name + " " + user.last_name}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-3 py-4 bg-[#D9EBFC] my-4 rounded-lg">
            <div>
              <CircularProgressBar />
            </div>
            <div>
              <p>Your profile is complete. Please complete your profile.</p>
            </div>
          </div>
          <div>
            <ConfirmButton
              type="submit"
              text="Edit profile"
              clickHandler={editBtn}
            />
          </div>
        </div>

        <div>{/* For the leads settings */}</div>
        <div>{/* For Leads | Responses | Help */}</div>
      </div>
    </div>




    // <div className="flex flex-col items-center justify-center my-10 min-h-80">
    //   <h2 className="font-bold">Welcome to your dashboard</h2>
    //   <div className="mt-5 py-2 px-4 border border-versich-blue rounded-md">
    //     <p>{user.first_name + " " + user.last_name}</p>
    //   </div>
    //   <p className="pt-12">
    //     Click{' '}
    //     <span>
    //       <Link to="/steppers" className="text-versich-blue underline">
    //         here
    //       </Link>
    //     </span>{' '}
    //     to complete your registration.
    //   </p>

    //   <Link
    //     to="/auth/verification/YOUR_TOKEN/email/"
    //     className="text-versich-blue underline pt-12"
    //   >
    //     Verify Email
    //   </Link>
      
    //   <p>
    //       Click{" "}
    //       <span>
    //         <Link
    //           to="/auth/verification/email/"
    //           className="text-versich-blue underline"
    //         >
    //           here
    //         </Link>
    //       </span>{" "}
    //       to view Email Verified Page
    //     </p>
    // </div>
  );
}

export default Dashboard;
