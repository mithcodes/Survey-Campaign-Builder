import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../../redux/styleSlice";
import SelectField from "../controls/SelectField";
import NumberField from "../controls/NumberField";
import CornerRadiusField from "../controls/CornerRadiusField";
import CollapsibleSection from "../controls/CollapsibleSection";

const LAYOUT_OPTIONS = [
  { value: "radio", label: "Radio Style" },
  { value: "checkbox", label: "Checkbox Style" },
  { value: "filled", label: "Filled Option" },
  { value: "alternative", label: "Alternative Layout" },
];

const OptionListStyle = () => {
  const dispatch = useDispatch();
  const optionList = useSelector((state) => state.style.optionList);

  const set = (field, value) =>
    dispatch(setStyle({ path: ["optionList", field], value }));

  return (
    <CollapsibleSection title="Option List Style">
      <SelectField
        label="Option Layout"
        value={optionList.layout}
        onChange={(value) => set("layout", value)}
        options={LAYOUT_OPTIONS}
      />

      <NumberField
        label="Option Height"
        value={optionList.optionHeight}
        unit="px"
        onChange={(value) => set("optionHeight", value)}
      />

      <div className="grid grid-cols-2 gap-2">
        <NumberField
          label="Bullet Spacing"
          value={optionList.bulletSpacing}
          unit="px"
          onChange={(value) => set("bulletSpacing", value)}
        />

        <NumberField
          label="Option Spacing"
          value={optionList.optionSpacing}
          unit="px"
          onChange={(value) => set("optionSpacing", value)}
        />
      </div>

      <CornerRadiusField
        value={optionList.cornerRadius}
        onChange={(value) => set("cornerRadius", value)}
      />
    </CollapsibleSection>
  );
};

export default OptionListStyle;
