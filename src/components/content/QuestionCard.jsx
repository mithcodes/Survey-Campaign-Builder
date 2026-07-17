const QuestionCard = ({ question, index }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            Question {index + 1}
          </h3>

          <p className="text-sm text-slate-500">
            Configure this survey question
          </p>
        </div>

        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
          Draft
        </span>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4">
        <div>
          <p className="text-sm text-slate-500">Question Title</p>

          <p className="mt-1 font-medium text-slate-800">
            {question.title || "No title added"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Description</p>

          <p className="mt-1 text-slate-700">
            {question.description || "No description added"}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Options</p>

          <div className="mt-2 flex flex-wrap gap-2">
            {question.options.map((option, optionIndex) => (
              <span
                key={optionIndex}
                className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-sm"
              >
                {option}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              question.allowComments
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {question.allowComments
              ? "Comments Enabled"
              : "Comments Disabled"}
          </span>

          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
            Button: {question.submitButtonText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;