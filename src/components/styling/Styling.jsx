import Appearance from "./sections/Appearance";
import QuestionTitleStyle from "./sections/QuestionTitleStyle";
import SubtitleStyle from "./sections/SubtitleStyle";
import OptionListStyle from "./sections/OptionListStyle";
import SelectedOptionStyle from "./sections/SelectedOptionStyle";
import UnselectedOptionStyle from "./sections/UnselectedOptionStyle";
import CommentStyle from "./sections/CommentStyle";
import ButtonStyle from "./sections/ButtonStyle";
import CrossButtonStyle from "./sections/CrossButtonStyle";
import ThankYouStyle from "./sections/ThankYouStyle";

const Styling = () => {
  return (
    <div className="space-y-3">
      <Appearance />
      <QuestionTitleStyle />
      <SubtitleStyle />
      <OptionListStyle />
      <SelectedOptionStyle />
      <UnselectedOptionStyle />
      <CommentStyle />
      <ButtonStyle />
      <CrossButtonStyle />
      <ThankYouStyle />
    </div>
  );
};

export default Styling;
