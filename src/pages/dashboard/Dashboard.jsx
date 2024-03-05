// Dashboard.jsx
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user, isLoading } = useSelector(state => state.auth);

  if (isLoading) {
    // Loading state, you can render a loading spinner or something similar
    return (
      <div className="flex flex-col items-center justify-center my-10 min-h-80">
        <h2 className="font-bold">Loading...</h2>
      </div>
    );
  }

  if (!user || typeof user !== 'object' || !user.first_name || !user.last_name) {
    return (
      <div className="flex flex-col items-center justify-center my-10 min-h-80">
        <h2 className="font-bold">User data not available</h2>
      </div>
    );
  }

  // Render the dashboard
  return (
    <div className="flex flex-col items-center justify-center my-10 min-h-80">
      <h2 className="font-bold">Welcome to your dashboard</h2>
      <div className="mt-5 py-2 px-4 border border-versich-blue rounded-md">
        <p>{user.first_name + " " + user.last_name}</p>
      </div>
    </div>
  );
};

export default Dashboard;
