import { useState } from "react";

const Introduction = ({ pageCount, setPageCount }) => {
  const handleChange = (e) => {
    const value = Number(e.target.value);

    if (value >= 1) {
      setPageCount(value);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h2 className="text-xl font-semibold text-gray-800">
        Introduction
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Configure the survey structure.
      </p>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Number of Survey Pages
        </label>

        <input
          type="number"
          min="1"
          value={pageCount}
          onChange={handleChange}
          className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default Introduction;