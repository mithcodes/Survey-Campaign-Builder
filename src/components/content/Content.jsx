import { useSelector, useDispatch } from "react-redux";
import {
  updateQuestion,
  updateOption,
  addOption,
  deleteOption,
  deleteQuestion,
} from "../../redux/surveySlice";

import Introduction from "./Introduction";
import QuestionCard from "./QuestionCard";

const Content = () => {
  const dispatch = useDispatch();

  const questions = useSelector((state) => state.survey.questions);

  const updateQuestionHandler = (id, field, value) => {
    dispatch(
      updateQuestion({
        id,
        field,
        value,
      })
    );
  };

  const updateOptionHandler = (
    questionId,
    optionIndex,
    value
  ) => {
    dispatch(
      updateOption({
        questionId,
        optionIndex,
        value,
      })
    );
  };

  const addOptionHandler = (questionId) => {
    dispatch(addOption(questionId));
  };

  const deleteOptionHandler = (
    questionId,
    optionIndex
  ) => {
    dispatch(
      deleteOption({
        questionId,
        optionIndex,
      })
    );
  };

  const deleteQuestionHandler = (questionId) => {
    dispatch(deleteQuestion(questionId));
  };

  return (
    <div className="space-y-6">
      <Introduction />

      <div className="space-y-5">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            totalQuestions={questions.length}
            updateQuestion={updateQuestionHandler}
            updateOption={updateOptionHandler}
            addOption={addOptionHandler}
            deleteOption={deleteOptionHandler}
            deleteQuestion={deleteQuestionHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;