const QuestionCard = ({
  question,
  index,
  totalQuestions,
  updateQuestion,
  updateOption,
  addOption,
  deleteOption,
  deleteQuestion,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b bg-slate-50">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Question {index + 1}
          </h2>

          <p className="text-sm text-slate-500">
            Configure your survey question
          </p>
        </div>

        <button
          onClick={() => deleteQuestion(question.id)}
          disabled={totalQuestions === 1}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            totalQuestions === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
        >
          Delete
        </button>
      </div>

      <div className="p-6 space-y-6">

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Question Title
          </label>

          <input
            type="text"
            value={question.title}
            placeholder="Enter question title"
            onChange={(e) =>
              updateQuestion(
                question.id,
                "title",
                e.target.value
              )
            }
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Description
          </label>

          <textarea
            rows="3"
            value={question.description}
            placeholder="Enter description"
            onChange={(e) =>
              updateQuestion(
                question.id,
                "description",
                e.target.value
              )
            }
            className="w-full border border-slate-300 rounded-lg px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Options */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">
            Options
          </label>

          <div className="space-y-3">

            {question.options.map((option, optionIndex) => (
              <div
                key={optionIndex}
                className="flex gap-3"
              >
                <input
                  type="text"
                  value={option}
                  onChange={(e) =>
                    updateOption(
                      question.id,
                      optionIndex,
                      e.target.value
                    )
                  }
                  className="flex-1 border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  onClick={() =>
                    deleteOption(
                      question.id,
                      optionIndex
                    )
                  }
                  disabled={question.options.length <= 2}
                  className={`px-4 rounded-lg ${
                    question.options.length <= 2
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }`}
                >
                  Delete
                </button>
              </div>
            ))}

          </div>

          <button
            onClick={() =>
              addOption(question.id)
            }
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg"
          >
            + Add Option
          </button>
        </div>
                {/* Settings */}
        <div className="border-t border-slate-200 pt-6 space-y-6">

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                Allow Additional Comments
              </h3>

              <p className="text-sm text-slate-500">
                Users can write their own answer.
              </p>
            </div>

            <input
              type="checkbox"
              checked={question.allowComments}
              onChange={(e) =>
                updateQuestion(
                  question.id,
                  "allowComments",
                  e.target.checked
                )
              }
              className="h-5 w-5 accent-blue-600 cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Submit Button Text
            </label>

            <input
              type="text"
              value={question.submitButtonText}
              placeholder="Next"
              onChange={(e) =>
                updateQuestion(
                  question.id,
                  "submitButtonText",
                  e.target.value
                )
              }
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default QuestionCard;