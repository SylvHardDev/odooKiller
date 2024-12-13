import { Search, Bell, HelpCircle } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between px-6 py-4 bg-gradient-to-b from-gray-50 to-gray-100 border-b">
      {/* Left Section */}
      <div className="flex items-center">
        <div>
          <h1 className="text-lg font-bold text-gray-800">
            <span className="text-slate-300">Welcome,</span>
            <br /> Brooklyn Simmons
          </h1>
        </div>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex-1 mx-6 w-1/2 h-full flex items-center justify-center ">
        <div className="relative shadow-sm bg-[#fbfbfb96] flex items-center m-auto w-2/3 rounded-lg text-sm">
          <Search className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Find something"
            className="w-full pl-10 pr-4 py-3 bg-transparent focus:outline-none rounded-lg focus:ring-2 focus:ring-yellow-200"
          />
          <button className="absolute right-2 flex items-center px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200">
            ⌘ K
          </button>
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-white rounded-full hover:bg-gray-200">
          <HelpCircle className="text-gray-600" />
        </button>
        <button className="p-2 bg-white rounded-full hover:bg-gray-200">
          <Bell className="text-gray-600" />
        </button>
      </div>
    </div>

    
  );
};

export default Navbar;
