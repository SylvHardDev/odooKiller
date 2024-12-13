import "./Dashboard.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Placeholder for other content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Dashboard Content
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
