import { useDispatch, useSelector } from "react-redux";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import {
  addLogicCondition,
  updateLogicCondition,
  deleteLogicCondition,
} from "../../redux/surveySlice";

const LogicSection = ({ question }) => {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.survey.questions);

  const redirectOptions = [
    { value: "next", label: "Next Question" },
    ...questions
      .map((q, i) => ({ q, i }))
      .filter(({ q }) => q.id !== question.id)
      .map(({ q, i }) => ({ value: q.id, label: `Question ${i + 1}` })),
    { value: "thankyou", label: "Thank You Page" },
  ];

  const addCondition = () => dispatch(addLogicCondition(question.id));

  const updateCondition = (conditionId, field, value) =>
    dispatch(
      updateLogicCondition({ questionId: question.id, conditionId, field, value })
    );

  const deleteCondition = (conditionId) =>
    dispatch(deleteLogicCondition({ questionId: question.id, conditionId }));

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-800">Logic</h3>
          <p className="text-xs text-slate-500">
            Redirect based on the selected option
          </p>
        </div>

        <button
          onClick={addCondition}
          className="flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 text-sm font-medium"
        >
          <FiPlus size={15} />
          Add Condition
        </button>
      </div>

      {question.logic.length === 0 && (
        <p className="text-xs text-slate-400">No conditions added.</p>
      )}

      <div className="space-y-2">
        {question.logic.map((condition) => (
          <div
            key={condition.id}
            className="flex items-center gap-2 border border-slate-200 rounded-lg p-2"
          >
            <span className="text-xs text-slate-500 shrink-0">If</span>

            <select
              value={condition.optionIndex}
              onChange={(e) =>
                updateCondition(condition.id, "optionIndex", Number(e.target.value))
              }
              className="flex-1 min-w-0 border border-slate-200 rounded-md px-2 py-1.5 text-xs outline-none"
            >
              {question.options.map((option, index) => (
                <option key={index} value={index}>
                  {option || `Option ${index + 1}`}
                </option>
              ))}
            </select>

            <span className="text-xs text-slate-500 shrink-0">go to</span>

            <select
              value={condition.redirectTo}
              onChange={(e) =>
                updateCondition(condition.id, "redirectTo", e.target.value)
              }
              className="flex-1 min-w-0 border border-slate-200 rounded-md px-2 py-1.5 text-xs outline-none"
            >
              {redirectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <button
              onClick={() => deleteCondition(condition.id)}
              className="shrink-0 text-red-500 hover:bg-red-50 rounded-md p-1.5"
            >
              <FiTrash2 size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogicSection;
