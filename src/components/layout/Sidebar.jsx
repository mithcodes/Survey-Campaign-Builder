import { useState } from "react";
import Content from "../content/Content";
import Styling from "../styling/Styling";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("content");

  return (
    <div className="h-full flex flex-col bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b px-5 py-3">
        <h1 className="text-xl font-bold text-gray-800">
          Survey Builder
        </h1>

        <p className="text-sm text-gray-500 mt-0.5">
          Configure your survey campaign
        </p>
      </div>

      {/* Tabs */}
      <div className="px-4 pt-3 pb-2">
        <div className="flex bg-gray-200 rounded-lg p-1">

          <button
            onClick={() => setActiveTab("content")}
            className={`flex-1 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === "content"
                ? "bg-white shadow text-blue-600"
                : "text-gray-600"
            }`}
          >
            Content
          </button>

          <button
            onClick={() => setActiveTab("styling")}
            className={`flex-1 py-2 rounded-md font-medium transition-all duration-300 ${
              activeTab === "styling"
                ? "bg-white shadow text-blue-600"
                : "text-gray-600"
            }`}
          >
            Styling
          </button>

        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">

        {activeTab === "content" ? (
          <Content />
        ) : (
          <Styling />
        )}

      </div>

    </div>
  );
};

export default Sidebar;
