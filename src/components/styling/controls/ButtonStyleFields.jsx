import ColorField from "./ColorField";
import NumberField from "./NumberField";
import FontFamilyField from "./FontFamilyField";
import FontStyleField from "./FontStyleField";
import AlignField from "./AlignField";
import MarginField from "./MarginField";
import CornerRadiusField from "./CornerRadiusField";
import ToggleField from "./ToggleField";

const ButtonStyleFields = ({ value, onChange }) => {
  const set = (field, val) => onChange({ ...value, [field]: val });

  return (
    <>
      <ToggleField
        label="Occupy Full Width"
        checked={value.fullWidth}
        onChange={(val) => set("fullWidth", val)}
      />

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

      <ColorField
        label="Background Color"
        value={value.backgroundColor}
        onChange={(val) => set("backgroundColor", val)}
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
          label="Border Width"
          value={value.borderWidth}
          unit="px"
          onChange={(val) => set("borderWidth", val)}
        />
      </div>

      <FontStyleField
        value={value.fontStyle}
        onChange={(val) => set("fontStyle", val)}
      />

      {!value.fullWidth && (
        <div className="grid grid-cols-2 gap-2">
          <NumberField
            label="Height"
            value={value.height}
            unit="px"
            onChange={(val) => set("height", val)}
          />

          <NumberField
            label="Width"
            value={value.width}
            unit="px"
            onChange={(val) => set("width", val)}
          />
        </div>
      )}

      {value.fullWidth && (
        <NumberField
          label="Height"
          value={value.height}
          unit="px"
          onChange={(val) => set("height", val)}
        />
      )}

      <CornerRadiusField
        value={value.cornerRadius}
        onChange={(val) => set("cornerRadius", val)}
      />

      <AlignField value={value.align} onChange={(val) => set("align", val)} />

      <MarginField value={value.margin} onChange={(val) => set("margin", val)} />
    </>
  );
};

export default ButtonStyleFields;
