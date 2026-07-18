import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../../redux/styleSlice";
import OptionStyleFields from "../controls/OptionStyleFields";
import CollapsibleSection from "../controls/CollapsibleSection";

const SelectedOptionStyle = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state) => state.style.selectedOption);

  const handleChange = (value) =>
    dispatch(setStyle({ path: ["selectedOption"], value }));

  return (
    <CollapsibleSection title="Selected Option Styling">
      <OptionStyleFields value={selectedOption} onChange={handleChange} />
    </CollapsibleSection>
  );
};

export default SelectedOptionStyle;
