import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../../redux/styleSlice";
import ColorField from "../controls/ColorField";
import NumberField from "../controls/NumberField";
import CornerRadiusField from "../controls/CornerRadiusField";
import CollapsibleSection from "../controls/CollapsibleSection";

const Appearance = () => {
  const dispatch = useDispatch();
  const appearance = useSelector((state) => state.style.appearance);

  const set = (field, value) =>
    dispatch(setStyle({ path: ["appearance", field], value }));

  return (
    <CollapsibleSection title="Appearance" defaultOpen>
      <ColorField
        label="Background Color"
        value={appearance.backgroundColor}
        onChange={(value) => set("backgroundColor", value)}
      />

      <CornerRadiusField
        value={appearance.cornerRadius}
        onChange={(value) => set("cornerRadius", value)}
      />

      <NumberField
        label="Display Delay"
        value={appearance.delay}
        unit="sec"
        onChange={(value) => set("delay", value)}
      />

      <div className="grid grid-cols-2 gap-2">
        <ColorField
          label="Backdrop Color"
          value={appearance.backdropColor}
          onChange={(value) => set("backdropColor", value)}
        />

        <NumberField
          label="Backdrop Opacity"
          value={appearance.backdropOpacity}
          min={0}
          max={1}
          step={0.1}
          onChange={(value) => set("backdropOpacity", value)}
        />
      </div>
    </CollapsibleSection>
  );
};

export default Appearance;
