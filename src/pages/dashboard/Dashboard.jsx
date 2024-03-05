import { useSelector } from "react-redux";

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
    </div>
  );
}

export default Dashboard;
