import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../../redux/styleSlice";
import TextStyleFields from "../controls/TextStyleFields";
import CollapsibleSection from "../controls/CollapsibleSection";

const SubtitleStyle = () => {
  const dispatch = useDispatch();
  const subtitle = useSelector((state) => state.style.subtitle);

  const handleChange = (value) =>
    dispatch(setStyle({ path: ["subtitle"], value }));

  return (
    <CollapsibleSection title="Subtitle Styling">
      <TextStyleFields value={subtitle} onChange={handleChange} />
    </CollapsibleSection>
  );
};

export default SubtitleStyle;
