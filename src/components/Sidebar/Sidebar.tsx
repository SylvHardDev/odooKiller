import "./Sidebar.css";
import {
  CheckCircle,
  Grid,
  Zap,
  Calendar,
  FileText,
  Box,
  BarChart,
  Users,
  User,
  Settings,
  HelpCircle,
  PanelLeftClose,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar bg-gradient-to-b from-gray-50 via-white to-gray-100 w-64 h-screen flex flex-col justify-between p-4 border-r">
      {/* Header */}
      <div className="flex items-center mb-6 relative">
        <div className="flex items-center justify-center border border-lime-950 h-10 w-9">
          <span className="text-green-950 font-bold text-xl">N</span>
        </div>
        <h1 className="text-xl font-bold text-gray-800 ml-3">Nuklear</h1>
        <div className="absolute right-0 hover:cursor-pointer">
          <PanelLeftClose className="w-5 text-gray-600 mr-3" />
        </div>
      </div>
      {/* Main Navigation */}
      <div>
        <div className="mb-6 bg-[#F8F9FB] p-2 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle className="text-purple-600 w-5 mr-3" />
              <span className="text-gray-800 font-medium">Tasks</span>
            </div>
            <span className="bg-white text-purple-600 text-sm px-1 py-0.5 rounded-lg">
              16
            </span>
          </div>
        </div>

        <div className="flex items-center mb-6 ml-2">
          <Zap className="text-gray-500 mr-3 w-5" />
          <span className="text-gray-600 font-medium">Activities</span>
        </div>

        <hr className="py-4" />

        <p className="text-gray-500 uppercase text-xs mb-3">Main</p>
        <nav className="mb-6">
          <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <Grid className="w-5 text-gray-600 mr-3" />
            <span className="text-gray-700 font-medium">Dashboard</span>
          </div>
          <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <Calendar className="w-5 text-gray-600 mr-3" />
            <span className="text-gray-700 font-medium">Schedule</span>
          </div>
          <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <FileText className="w-5 text-gray-600 mr-3" />
            <span className="text-gray-700 font-medium">Note</span>
          </div>
          <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <Box className="w-5 text-gray-600 mr-3" />
            <span className="text-gray-700 font-medium">Products</span>
          </div>
          <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <BarChart className="w-5 text-gray-600 mr-3" />
            <span className="text-gray-700 font-medium">Report</span>
          </div>
        </nav>

        <p className="text-gray-500 uppercase text-xs mb-3">Records</p>
        <nav>
          <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <Users className="w-5 text-gray-600 mr-3" />
            <span className="text-gray-700 font-medium">Team</span>
          </div>
          <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
            <User className="w-5 text-gray-600 mr-3" />
            <span className="text-gray-700 font-medium">Clients</span>
          </div>
        </nav>
      </div>

      {/* Footer */}
      <div>
        <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer mb-3">
          <Settings className="w-5 text-gray-600 mr-3" />
          <span className="text-gray-700 font-medium">Settings</span>
        </div>
        <div className="flex items-center p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
          <HelpCircle className="w-5 text-gray-600 mr-3" />
          <span className="text-gray-700 font-medium">Support</span>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg mt-6">
          <img
            src="https://via.placeholder.com/40"
            alt="User Avatar"
            className="h-10 w-10 rounded-full mr-3"
          />
          <div>
            <p className="text-gray-800 font-medium">Brooklyn Simmons</p>
            <p className="text-sm text-gray-500">simmons@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
