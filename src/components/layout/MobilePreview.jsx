import { useState } from "react";
import { useSelector } from "react-redux";
import { FiX, FiCheck, FiImage } from "react-icons/fi";

const textStyleToCss = (t) => ({
  color: t.color,
  fontFamily: t.fontFamily,
  fontSize: `${t.fontSize}px`,
  fontWeight: t.fontStyle.bold ? 700 : t.fontWeight,
  fontStyle: t.fontStyle.italic ? "italic" : "normal",
  textDecoration: t.fontStyle.underline ? "underline" : "none",
  textAlign: t.align,
  marginTop: t.margin.top,
  marginBottom: t.margin.bottom,
  marginLeft: t.margin.left,
  marginRight: t.margin.right,
});

const optionStyleToCss = (o) => ({
  color: o.textColor,
  backgroundColor: o.backgroundColor,
  borderColor: o.borderColor,
  borderWidth: o.borderWidth,
  borderStyle: "solid",
  fontFamily: o.fontFamily,
  fontSize: `${o.fontSize}px`,
  fontWeight: o.fontStyle.bold ? 700 : o.fontWeight,
  fontStyle: o.fontStyle.italic ? "italic" : "normal",
  textDecoration: o.fontStyle.underline ? "underline" : "none",
  textAlign: o.align,
});

const buttonStyleToCss = (b) => ({
  width: b.fullWidth ? "100%" : `${b.width}px`,
  height: `${b.height}px`,
  color: b.textColor,
  backgroundColor: b.backgroundColor,
  borderColor: b.borderColor,
  borderWidth: b.borderWidth,
  borderStyle: "solid",
  fontFamily: b.fontFamily,
  fontSize: `${b.fontSize}px`,
  fontWeight: b.fontStyle.bold ? 700 : 500,
  fontStyle: b.fontStyle.italic ? "italic" : "normal",
  textDecoration: b.fontStyle.underline ? "underline" : "none",
  borderTopLeftRadius: b.cornerRadius.tl,
  borderTopRightRadius: b.cornerRadius.tr,
  borderBottomLeftRadius: b.cornerRadius.bl,
  borderBottomRightRadius: b.cornerRadius.br,
  marginTop: b.margin.top,
  marginBottom: b.margin.bottom,
  marginLeft: b.margin.left,
  marginRight: b.margin.right,
});

const justifyForAlign = (align) =>
  align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start";

const MobilePreview = () => {
  const surveyTitle = useSelector((state) => state.survey.surveyTitle);
  const surveyDescription = useSelector((state) => state.survey.surveyDescription);
  const questions = useSelector((state) => state.survey.questions);
  const thankYouContent = useSelector((state) => state.survey.thankYou);

  const appearance = useSelector((state) => state.style.appearance);
  const questionTitle = useSelector((state) => state.style.questionTitle);
  const subtitle = useSelector((state) => state.style.subtitle);
  const optionList = useSelector((state) => state.style.optionList);
  const selectedOption = useSelector((state) => state.style.selectedOption);
  const unselectedOption = useSelector((state) => state.style.unselectedOption);
  const comment = useSelector((state) => state.style.comment);
  const ctaButton = useSelector((state) => state.style.ctaButton);
  const crossButton = useSelector((state) => state.style.crossButton);
  const thankYou = useSelector((state) => state.style.thankYou);

  const [selectedByQuestion, setSelectedByQuestion] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const selectOption = (questionId, index) =>
    setSelectedByQuestion((prev) => ({ ...prev, [questionId]: index }));

  const safeIndex = questions.length > 0 ? Math.min(currentIndex, questions.length - 1) : 0;
  const currentQuestion = questions[safeIndex];
  const isLastQuestion = safeIndex === questions.length - 1;

  const handleNext = () => {
    if (isLastQuestion) {
      if (thankYouContent.enabled) setCompleted(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handleBack = () => {
    if (completed) {
      setCompleted(false);
    } else {
      setCurrentIndex((i) => Math.max(i - 1, 0));
    }
  };

  const renderBullet = (isSelected) => {
    if (optionList.layout === "filled") return null;

    if (optionList.layout === "alternative") {
      return (
        <span
          className="text-xs font-semibold w-5 h-5 flex items-center justify-center rounded-full shrink-0"
          style={{
            backgroundColor: isSelected
              ? selectedOption.borderColor
              : "#f3f4f6",
            color: isSelected ? "#ffffff" : "#9ca3af",
          }}
        >
          {isSelected ? <FiCheck size={11} /> : null}
        </span>
      );
    }

    if (optionList.layout === "checkbox") {
      return (
        <span
          className="w-4 h-4 rounded border-2 flex items-center justify-center shrink-0"
          style={{
            borderColor: isSelected
              ? selectedOption.borderColor
              : unselectedOption.borderColor,
            backgroundColor: isSelected ? selectedOption.borderColor : "transparent",
          }}
        >
          {isSelected && <FiCheck className="text-white" size={10} />}
        </span>
      );
    }

    return (
      <span
        className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
        style={{
          borderColor: isSelected
            ? selectedOption.borderColor
            : unselectedOption.borderColor,
        }}
      >
        {isSelected && (
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: selectedOption.borderColor }}
          />
        )}
      </span>
    );
  };

  const cardStyle = {
    backgroundColor: appearance.backgroundColor,
    borderTopLeftRadius: appearance.cornerRadius.tl,
    borderTopRightRadius: appearance.cornerRadius.tr,
    borderBottomLeftRadius: appearance.cornerRadius.bl,
    borderBottomRightRadius: appearance.cornerRadius.br,
  };

  const crossPresetClass =
    {
      circle: "rounded-full",
      square: "rounded-md",
      minimal: "",
      outline: "rounded-full",
    }[crossButton.stylePreset] || "rounded-full";

  const crossShowBg = crossButton.stylePreset !== "minimal";
  const crossShowBorder = crossButton.stylePreset === "outline";

  return (
    <div
      style={{
        height: "clamp(560px, 90vh, 780px)",
        width: "calc(clamp(560px, 90vh, 780px) / 2)",
      }}
      className="rounded-[28px] border-4 border-gray-800 bg-white shadow-lg overflow-hidden flex flex-col"
    >

      {/* Screen */}
      <div className="relative flex-1 min-h-0 overflow-hidden bg-white">

        {/* Backdrop - dims the page behind the survey popup */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: appearance.backdropColor,
            opacity: appearance.backdropOpacity,
          }}
        />

        <div
          style={cardStyle}
          className="absolute inset-0 overflow-y-auto p-4"
        >

            {crossButton.enabled && (
              <button
                type="button"
                className={`absolute flex items-center justify-center ${crossPresetClass}`}
                style={{
                  width: crossButton.size,
                  height: crossButton.size,
                  top: crossButton.margin.top,
                  right: crossButton.margin.right,
                  backgroundColor: crossShowBg ? crossButton.fillColor : "transparent",
                  border: crossShowBorder
                    ? `1.5px solid ${crossButton.strokeColor}`
                    : "none",
                }}
              >
                {crossButton.customIcon ? (
                  <img
                    src={crossButton.customIcon}
                    alt="close"
                    className="w-full h-full object-contain rounded-full"
                  />
                ) : (
                  <FiX
                    style={{ color: crossButton.crossColor }}
                    size={Math.max(12, crossButton.size * 0.5)}
                  />
                )}
              </button>
            )}

            <div className="mb-6">
              <h1 className="text-xl font-bold text-slate-800">{surveyTitle}</h1>

              <p className="text-sm text-slate-500 mt-2">{surveyDescription}</p>

              {appearance.delay > 0 && (
                <p className="text-[10px] text-slate-300 mt-1">
                  Appears after {appearance.delay}s
                </p>
              )}
            </div>

            {!completed && currentQuestion && (
              <div className="space-y-3">
                <div className="border border-slate-200 rounded-xl p-4">
                  <h2 style={textStyleToCss(questionTitle)}>
                    {safeIndex + 1}. {currentQuestion.title || "Untitled Question"}
                  </h2>

                  {currentQuestion.description && (
                    <p style={textStyleToCss(subtitle)}>{currentQuestion.description}</p>
                  )}

                  <div className="mt-3">
                    {currentQuestion.options.map((option, optionIndex) => {
                      const selectedIndex = selectedByQuestion[currentQuestion.id] ?? 0;
                      const isSelected = optionIndex === selectedIndex;
                      const activeStyle = isSelected
                        ? selectedOption
                        : unselectedOption;

                      return (
                        <label
                          key={optionIndex}
                          style={{
                            ...optionStyleToCss(activeStyle),
                            minHeight: optionList.optionHeight,
                            borderTopLeftRadius: optionList.cornerRadius.tl,
                            borderTopRightRadius: optionList.cornerRadius.tr,
                            borderBottomLeftRadius: optionList.cornerRadius.bl,
                            borderBottomRightRadius: optionList.cornerRadius.br,
                            gap: optionList.bulletSpacing,
                            marginBottom: optionList.optionSpacing,
                            justifyContent: justifyForAlign(activeStyle.align),
                          }}
                          className="flex items-center px-3 cursor-pointer transition"
                        >
                          <input
                            type="radio"
                            name={currentQuestion.id}
                            className="sr-only"
                            checked={isSelected}
                            onChange={() => selectOption(currentQuestion.id, optionIndex)}
                          />

                          {renderBullet(isSelected)}

                          <span className="truncate flex-1">
                            {option || `Option ${optionIndex + 1}`}
                          </span>
                        </label>
                      );
                    })}
                  </div>

                  {currentQuestion.allowComments && (
                    <textarea
                      placeholder="Write your comments..."
                      style={optionStyleToCss(comment)}
                      className="mt-3 w-full rounded-lg px-3 py-2 resize-none outline-none"
                    />
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      justifyContent: safeIndex > 0 ? "space-between" : justifyForAlign(ctaButton.align),
                    }}
                  >
                    {safeIndex > 0 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        style={buttonStyleToCss(ctaButton)}
                        className="cursor-pointer"
                      >
                        Back
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={handleNext}
                      style={buttonStyleToCss(ctaButton)}
                      className="cursor-pointer"
                    >
                      {currentQuestion.submitButtonText}
                    </button>
                  </div>
                </div>

                <p className="text-center text-xs text-slate-400">
                  Question {safeIndex + 1} of {questions.length}
                </p>
              </div>
            )}

            {/* Thank You Page preview */}
            {completed && thankYouContent.enabled && (
              <div className="mt-6 border-t border-dashed border-slate-200 pt-6">
                {thankYouContent.mediaUrl ? (
                  thankYouContent.mediaType === "image" ? (
                    <img
                      src={thankYouContent.mediaUrl}
                      alt="Thank you"
                      style={{
                        width: thankYou.image.width,
                        height: thankYou.image.height,
                        marginTop: thankYou.image.margin.top,
                        marginBottom: thankYou.image.margin.bottom,
                        marginLeft: thankYou.image.margin.left,
                        marginRight: thankYou.image.margin.right,
                      }}
                      className="mx-auto object-cover rounded-lg"
                    />
                  ) : (
                    <div
                      style={{
                        width: thankYou.image.width,
                        height: thankYou.image.height,
                        marginTop: thankYou.image.margin.top,
                        marginBottom: thankYou.image.margin.bottom,
                        marginLeft: thankYou.image.margin.left,
                        marginRight: thankYou.image.margin.right,
                      }}
                      className="mx-auto bg-slate-100 rounded-lg flex items-center justify-center text-center text-[10px] text-slate-400 px-2"
                    >
                      Lottie: {thankYouContent.mediaName}
                    </div>
                  )
                ) : (
                  <div
                    style={{
                      width: thankYou.image.width,
                      height: thankYou.image.height,
                      marginTop: thankYou.image.margin.top,
                      marginBottom: thankYou.image.margin.bottom,
                      marginLeft: thankYou.image.margin.left,
                      marginRight: thankYou.image.margin.right,
                    }}
                    className="mx-auto bg-slate-100 rounded-lg flex items-center justify-center text-slate-300"
                  >
                    <FiImage size={24} />
                  </div>
                )}

                <h2 style={textStyleToCss(thankYou.title)}>{thankYouContent.title}</h2>

                <p style={textStyleToCss(thankYou.subtitle)}>
                  {thankYouContent.subtitle}
                </p>

                <div
                  style={{ display: "flex", justifyContent: justifyForAlign(thankYou.button.align) }}
                >
                  <button style={buttonStyleToCss(thankYou.button)}>
                    {thankYouContent.buttonText}
                  </button>
                </div>
              </div>
            )}

        </div>
      </div>
    </div>
  );
};

export default MobilePreview;
