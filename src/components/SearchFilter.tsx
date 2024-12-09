import React from "react";

const SearchAndFilter: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search games..."
        className="w-full md:w-1/3 bg-[#1C1C1C] text-gray-300 rounded-lg py-2 px-4 placeholder-gray-500 focus:outline-none"
      />

      {/* Filter Dropdown */}
      <select className="w-full md:w-1/5 bg-[#1C1C1C] text-gray-300 rounded-lg py-2 px-4 cursor-pointer">
        <option value="">Pick a Provider</option>
        <option value="provider1">Provider 1</option>
        <option value="provider2">Provider 2</option>
        <option value="provider3">Provider 3</option>
      </select>

      {/* Game Type Filters */}
      <div className="flex gap-4">
        <button className="bg-[#262626] text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700">
          Aviator
        </button>
        <button className="bg-[#262626] text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700">
          Slot
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
