const ALIGN_OPTIONS = [
  { value: "left", label: "Left" },
  { value: "center", label: "Center" },
  { value: "right", label: "Right" },
];

const AlignField = ({ label = "Alignment", value, onChange }) => {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label}
      </label>

      <div className="flex bg-gray-100 rounded-lg p-1">
        {ALIGN_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`flex-1 py-1.5 rounded-md text-xs font-medium transition ${
              value === option.value
                ? "bg-white shadow text-blue-600"
                : "text-gray-500"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlignField;
