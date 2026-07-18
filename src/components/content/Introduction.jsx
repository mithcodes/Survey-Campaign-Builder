import { useSelector, useDispatch } from "react-redux";
import {
  updateSurveyTitle,
  updateSurveyDescription,
  setQuestionCount,
} from "../../redux/surveySlice";

const Introduction = () => {
  const dispatch = useDispatch();

  const surveyTitle = useSelector(
    (state) => state.survey.surveyTitle
  );

  const surveyDescription = useSelector(
    (state) => state.survey.surveyDescription
  );

  const questionCount = useSelector(
    (state) => state.survey.questions.length
  );

  const increaseQuestion = () => {
    dispatch(setQuestionCount(questionCount + 1));
  };

  const decreaseQuestion = () => {
    if (questionCount > 1) {
      dispatch(setQuestionCount(questionCount - 1));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Survey Information
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Configure your survey details.
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Survey Title
          </label>

          <input
            type="text"
            value={surveyTitle}
            onChange={(e) =>
              dispatch(updateSurveyTitle(e.target.value))
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Survey Description
          </label>

          <textarea
            rows="4"
            value={surveyDescription}
            onChange={(e) =>
              dispatch(updateSurveyDescription(e.target.value))
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="border-t pt-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Question Count
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={decreaseQuestion}
                disabled={questionCount === 1}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-xl font-bold"
              >
                -
              </button>

              <div className="w-14 h-10 flex items-center justify-center border rounded-lg font-semibold text-lg">
                {questionCount}
              </div>

              <button
                onClick={increaseQuestion}
                className="w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold"
              >
                +
              </button>
            </div>
          </div>

          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-medium">
            Draft
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;