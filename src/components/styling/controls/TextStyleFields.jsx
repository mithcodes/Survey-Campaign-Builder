import ColorField from "./ColorField";
import NumberField from "./NumberField";
import FontFamilyField from "./FontFamilyField";
import FontStyleField from "./FontStyleField";
import AlignField from "./AlignField";
import MarginField from "./MarginField";

const TextStyleFields = ({ value, onChange }) => {
  const set = (field, val) => onChange({ ...value, [field]: val });

  return (
    <>
      <ColorField
        label="Color"
        value={value.color}
        onChange={(val) => set("color", val)}
      />

      <FontFamilyField
        value={value.fontFamily}
        onChange={(val) => set("fontFamily", val)}
      />

      <div className="grid grid-cols-2 gap-2">
        <NumberField
          label="Font Size"
          value={value.fontSize}
          unit="px"
          onChange={(val) => set("fontSize", val)}
        />

        <NumberField
          label="Font Weight"
          value={value.fontWeight}
          min={100}
          max={900}
          step={100}
          onChange={(val) => set("fontWeight", val)}
        />
      </div>

      <FontStyleField
        value={value.fontStyle}
        onChange={(val) => set("fontStyle", val)}
      />

      <AlignField value={value.align} onChange={(val) => set("align", val)} />

      <MarginField value={value.margin} onChange={(val) => set("margin", val)} />
    </>
  );
};

export default TextStyleFields;
