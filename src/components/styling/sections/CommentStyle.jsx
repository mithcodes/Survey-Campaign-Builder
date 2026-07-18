import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../../redux/styleSlice";
import OptionStyleFields from "../controls/OptionStyleFields";
import CollapsibleSection from "../controls/CollapsibleSection";

const CommentStyle = () => {
  const dispatch = useDispatch();
  const comment = useSelector((state) => state.style.comment);

  const handleChange = (value) =>
    dispatch(setStyle({ path: ["comment"], value }));

  return (
    <CollapsibleSection title="Additional Comment Styling">
      <OptionStyleFields value={comment} onChange={handleChange} />
    </CollapsibleSection>
  );
};

export default CommentStyle;
