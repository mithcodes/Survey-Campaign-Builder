import NumberField from "./NumberField";

const CORNERS = [
  { key: "tl", label: "Top Left" },
  { key: "tr", label: "Top Right" },
  { key: "bl", label: "Bottom Left" },
  { key: "br", label: "Bottom Right" },
];

const CornerRadiusField = ({ value, onChange }) => {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        Corner Radius
      </label>

      <div className="grid grid-cols-2 gap-2">
        {CORNERS.map((corner) => (
          <NumberField
            key={corner.key}
            label={corner.label}
            value={value[corner.key]}
            unit="px"
            onChange={(val) => onChange({ ...value, [corner.key]: val })}
          />
        ))}
      </div>
    </div>
  );
};

export default CornerRadiusField;
