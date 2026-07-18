import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../../redux/styleSlice";
import ToggleField from "../controls/ToggleField";
import SelectField from "../controls/SelectField";
import ColorField from "../controls/ColorField";
import NumberField from "../controls/NumberField";
import MarginField from "../controls/MarginField";
import CollapsibleSection from "../controls/CollapsibleSection";

const STYLE_PRESETS = [
  { value: "circle", label: "Circle" },
  { value: "square", label: "Square" },
  { value: "minimal", label: "Minimal" },
  { value: "outline", label: "Outline" },
];

const CrossButtonStyle = () => {
  const dispatch = useDispatch();
  const crossButton = useSelector((state) => state.style.crossButton);

  const set = (field, value) =>
    dispatch(setStyle({ path: ["crossButton", field], value }));

  const handleIconUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => set("customIcon", reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <CollapsibleSection title="Cross Button Styling">
      <ToggleField
        label="Enable Cross Button"
        checked={crossButton.enabled}
        onChange={(value) => set("enabled", value)}
      />

      <SelectField
        label="Cross Button Style"
        value={crossButton.stylePreset}
        onChange={(value) => set("stylePreset", value)}
        options={STYLE_PRESETS}
      />

      <div>
        <label className="block text-xs font-medium text-gray-600 mb-1">
          Upload Custom Icon
        </label>

        <input
          type="file"
          accept="image/png,image/jpeg,image/gif,.json"
          onChange={handleIconUpload}
          className="w-full text-xs text-gray-600 file:mr-2 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white file:text-xs"
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ColorField
          label="Cross Color"
          value={crossButton.crossColor}
          onChange={(value) => set("crossColor", value)}
        />

        <ColorField
          label="Fill Color"
          value={crossButton.fillColor}
          onChange={(value) => set("fillColor", value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <ColorField
          label="Stroke Color"
          value={crossButton.strokeColor}
          onChange={(value) => set("strokeColor", value)}
        />

        <NumberField
          label="Size"
          value={crossButton.size}
          unit="px"
          onChange={(value) => set("size", value)}
        />
      </div>

      <MarginField value={crossButton.margin} onChange={(value) => set("margin", value)} />
    </CollapsibleSection>
  );
};

export default CrossButtonStyle;
