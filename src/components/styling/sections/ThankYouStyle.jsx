import { useDispatch, useSelector } from "react-redux";
import { setStyle } from "../../../redux/styleSlice";
import TextStyleFields from "../controls/TextStyleFields";
import ButtonStyleFields from "../controls/ButtonStyleFields";
import NumberField from "../controls/NumberField";
import MarginField from "../controls/MarginField";
import CollapsibleSection from "../controls/CollapsibleSection";

const ThankYouStyle = () => {
  const dispatch = useDispatch();
  const thankYou = useSelector((state) => state.style.thankYou);

  const set = (path, value) => dispatch(setStyle({ path, value }));

  return (
    <>
      <CollapsibleSection title="Thank You - Title Styling">
        <TextStyleFields
          value={thankYou.title}
          onChange={(value) => set(["thankYou", "title"], value)}
        />
      </CollapsibleSection>

      <CollapsibleSection title="Thank You - Subtitle Styling">
        <TextStyleFields
          value={thankYou.subtitle}
          onChange={(value) => set(["thankYou", "subtitle"], value)}
        />
      </CollapsibleSection>

      <CollapsibleSection title="Thank You - Image Styling">
        <div className="grid grid-cols-2 gap-2">
          <NumberField
            label="Width"
            value={thankYou.image.width}
            unit="px"
            onChange={(value) =>
              set(["thankYou", "image"], { ...thankYou.image, width: value })
            }
          />

          <NumberField
            label="Height"
            value={thankYou.image.height}
            unit="px"
            onChange={(value) =>
              set(["thankYou", "image"], { ...thankYou.image, height: value })
            }
          />
        </div>

        <MarginField
          value={thankYou.image.margin}
          onChange={(value) =>
            set(["thankYou", "image"], { ...thankYou.image, margin: value })
          }
        />
      </CollapsibleSection>

      <CollapsibleSection title="Thank You - Button Styling">
        <ButtonStyleFields
          value={thankYou.button}
          onChange={(value) => set(["thankYou", "button"], value)}
        />
      </CollapsibleSection>
    </>
  );
};

export default ThankYouStyle;
