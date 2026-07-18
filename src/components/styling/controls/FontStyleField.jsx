const STYLE_OPTIONS = [
  { key: "bold", label: "B" },
  { key: "italic", label: "I" },
  { key: "underline", label: "U" },
];

const FontStyleField = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        Font Style
      </label>

      <div className="flex gap-2">
        {STYLE_OPTIONS.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => onChange({ ...value, [option.key]: !value[option.key] })}
            className={`w-9 h-9 rounded-lg text-sm font-semibold border transition ${
              value[option.key]
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-500 border-gray-300"
            } ${option.key === "italic" ? "italic" : ""} ${
              option.key === "underline" ? "underline" : ""
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FontStyleField;
