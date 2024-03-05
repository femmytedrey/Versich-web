import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector(state => state.auth);

  if (!user || typeof user !== 'object' || !user.first_name || !user.last_name) {
    return (
      <div className="flex flex-col items-center justify-center my-10 min-h-80">
        <h2 className="font-bold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center my-10 min-h-80">
      <h2 className="font-bold">Welcome to your dashboard</h2>
      <div className="mt-5 py-2 px-4 border border-versich-blue rounded-md">
        <p>{user.first_name + " " + user.last_name}</p>
      </div>
      {/* Main purpose of this is for Samuel to view the steppers so that I can be able to submit the first milestone */}
      <Link to='/steppers'>click to complete your profile registration</Link>
    </div>
  );
}

export default Dashboard;
