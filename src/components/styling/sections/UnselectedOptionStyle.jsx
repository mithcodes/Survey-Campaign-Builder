import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../../redux/styleSlice";
import OptionStyleFields from "../controls/OptionStyleFields";
import CollapsibleSection from "../controls/CollapsibleSection";

const UnselectedOptionStyle = () => {
  const dispatch = useDispatch();
  const unselectedOption = useSelector((state) => state.style.unselectedOption);

  const handleChange = (value) =>
    dispatch(setStyle({ path: ["unselectedOption"], value }));

  return (
    <CollapsibleSection title="Unselected Option Styling">
      <OptionStyleFields value={unselectedOption} onChange={handleChange} />
    </CollapsibleSection>
  );
};

export default UnselectedOptionStyle;
