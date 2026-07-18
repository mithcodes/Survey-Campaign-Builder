const ColorField = ({ label, value, onChange }) => {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label}
      </label>

      <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-1.5">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-7 h-7 rounded-md border border-gray-200 cursor-pointer shrink-0"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 min-w-0 text-sm text-gray-700 outline-none"
        />
      </div>
    </div>
  );
};

export default ColorField;
