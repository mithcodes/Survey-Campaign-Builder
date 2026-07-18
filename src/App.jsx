import Sidebar from "./components/layout/Sidebar";
import MobilePreview from "./components/layout/MobilePreview";

const App = () => {
  return (
    <div className="min-h-screen md:h-screen bg-gray-100 flex flex-col md:flex-row">

      {/* Left Panel */}
      <div className="order-2 md:order-1 w-full md:w-[clamp(320px,32vw,420px)] shrink-0 border-t md:border-t-0 md:border-r bg-gray-50">
        <Sidebar />
      </div>

      {/* Right Panel */}
      <div className="order-1 md:order-2 flex-1 min-w-0 flex items-center justify-center p-4 overflow-auto">
        <MobilePreview />
      </div>

    </div>
  );
};

export default App;
