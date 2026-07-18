const NumberField = ({ label, value, onChange, min = 0, max, step = 1, unit }) => {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label}
      </label>

      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-500">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full text-sm text-gray-700 outline-none"
        />

        {unit && (
          <span className="text-xs text-gray-400 shrink-0 ml-1">{unit}</span>
        )}
      </div>
    </div>
  );
};

export default NumberField;
