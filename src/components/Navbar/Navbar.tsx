import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      <div>
        <h1 className="text-lg font-bold text-gray-700">Welcome, Brooklyn Simmons</h1>
        <p className="text-sm text-gray-500">May | Daily Tasks</p>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Find something"
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
        />
        <button className="bg-gray-200 p-2 rounded-full">
          <span>🔔</span>
        </button>
        <button className="bg-gray-200 p-2 rounded-full">
          <span>⚙️</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
