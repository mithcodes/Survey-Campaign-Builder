import Sidebar from "./components/layout/Sidebar";
import MobilePreview from "./components/layout/MobilePreview";

const App = () => {
  return (
    <div className="h-screen bg-gray-100 flex">

      {/* Left Panel */}
      <div className="w-[420px] border-r bg-gray-50">
        <Sidebar />
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-10">
        <MobilePreview />
      </div>

    </div>
  );
};

export default App;