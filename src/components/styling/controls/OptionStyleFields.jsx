import ColorField from "./ColorField";
import NumberField from "./NumberField";
import FontFamilyField from "./FontFamilyField";
import FontStyleField from "./FontStyleField";
import AlignField from "./AlignField";

const OptionStyleFields = ({ value, onChange }) => {
  const set = (field, val) => onChange({ ...value, [field]: val });

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <ColorField
          label="Border Color"
          value={value.borderColor}
          onChange={(val) => set("borderColor", val)}
        />

        <ColorField
          label="Text Color"
          value={value.textColor}
          onChange={(val) => set("textColor", val)}
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ColorField
          label="Background Color"
          value={value.backgroundColor}
          onChange={(val) => set("backgroundColor", val)}
        />

        <NumberField
          label="Border Width"
          value={value.borderWidth}
          unit="px"
          onChange={(val) => set("borderWidth", val)}
        />
      </div>

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
    </>
  );
};

export default OptionStyleFields;
