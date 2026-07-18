import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../../redux/styleSlice";
import ButtonStyleFields from "../controls/ButtonStyleFields";
import CollapsibleSection from "../controls/CollapsibleSection";

const ButtonStyle = () => {
  const dispatch = useDispatch();
  const ctaButton = useSelector((state) => state.style.ctaButton);

  const handleChange = (value) =>
    dispatch(setStyle({ path: ["ctaButton"], value }));

  return (
    <CollapsibleSection title="CTA Button Styling">
      <ButtonStyleFields value={ctaButton} onChange={handleChange} />
    </CollapsibleSection>
  );
};

export default ButtonStyle;
