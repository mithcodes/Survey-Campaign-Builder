import { useSelector } from "react-redux";

const MobilePreview = () => {
  const surveyTitle = useSelector(
    (state) => state.survey.surveyTitle
  );

  const surveyDescription = useSelector(
    (state) => state.survey.surveyDescription
  );

  const questions = useSelector(
    (state) => state.survey.questions
  );

  return (
    <div className="w-[390px] h-[780px] rounded-[40px] border-[10px] border-black bg-white shadow-2xl overflow-hidden">

      {/* Notch */}
      <div className="flex justify-center py-3">
        <div className="w-28 h-2 rounded-full bg-black"></div>
      </div>

      {/* Screen */}
      <div className="h-[700px] overflow-y-auto px-5 pb-10">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">
            {surveyTitle}
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            {surveyDescription}
          </p>
        </div>

        <div className="space-y-8">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="border border-slate-200 rounded-xl p-4"
            >
              <h2 className="font-semibold text-slate-800">
                {index + 1}.{" "}
                {question.title || "Untitled Question"}
              </h2>

              {question.description && (
                <p className="text-sm text-slate-500 mt-2">
                  {question.description}
                </p>
              )}

              <div className="mt-4 space-y-3">
                {question.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name={question.id}
                    />

                    <span className="text-sm">
                      {option}
                    </span>
                  </label>
                ))}
              </div>

              {question.allowComments && (
                <textarea
                  placeholder="Write your comments..."
                  className="mt-4 w-full border border-slate-300 rounded-lg px-3 py-2 resize-none outline-none"
                />
              )}

              <button
                className="mt-5 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                {question.submitButtonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MobilePreview;