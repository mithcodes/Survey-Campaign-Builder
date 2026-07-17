const MobilePreview = () => {
  return (
    <div className="w-[390px] h-[780px] rounded-[40px] border-[10px] border-black bg-white shadow-2xl overflow-hidden">

      <div className="flex justify-center py-3">
        <div className="w-28 h-2 rounded-full bg-black"></div>
      </div>

      <div className="flex h-full items-center justify-center text-gray-400 text-lg font-medium">
        Live Mobile Preview
      </div>

    </div>
  );
};

export default MobilePreview;