import NumberField from "./NumberField";

const SIDES = [
  { key: "top", label: "Top" },
  { key: "bottom", label: "Bottom" },
  { key: "left", label: "Left" },
  { key: "right", label: "Right" },
];

const MarginField = ({ label = "Margin", value, onChange }) => {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label}
      </label>

      <div className="grid grid-cols-2 gap-2">
        {SIDES.map((side) => (
          <NumberField
            key={side.key}
            label={side.label}
            value={value[side.key]}
            unit="px"
            onChange={(val) => onChange({ ...value, [side.key]: val })}
          />
        ))}
      </div>
    </div>
  );
};

export default MarginField;
