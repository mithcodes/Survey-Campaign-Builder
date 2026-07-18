import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../../redux/styleSlice";
import TextStyleFields from "../controls/TextStyleFields";
import CollapsibleSection from "../controls/CollapsibleSection";

const QuestionTitleStyle = () => {
  const dispatch = useDispatch();
  const questionTitle = useSelector((state) => state.style.questionTitle);

  const handleChange = (value) =>
    dispatch(setStyle({ path: ["questionTitle"], value }));

  return (
    <CollapsibleSection title="Question Title Styling">
      <TextStyleFields value={questionTitle} onChange={handleChange} />
    </CollapsibleSection>
  );
};

export default QuestionTitleStyle;
