import { Search, Bell, HelpCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-gray-50 to-gray-100 border-b">
      {/* Left Section */}
      <div className="flex items-center">
        <div>
          <h1 className="text-lg font-bold text-gray-800">
          <span className="text-slate-300">Welcome,</span><br /> Brooklyn Simmons
          </h1>
        </div>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex-1 mx-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Find something"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button className="flex items-center px-3 py-1.5 bg-gray-200 rounded-full text-sm font-medium text-gray-700 shadow hover:bg-gray-300">
            ⌘ K
          </button>
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <HelpCircle className="text-gray-600" />
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          <Bell className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
