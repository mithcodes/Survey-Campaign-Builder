import { useState } from "react";
import Introduction from "./Introduction";
import QuestionCard from "./QuestionCard";

const createQuestion = () => ({
  id: crypto.randomUUID(),
  title: "",
  description: "",
  options: ["Option 1", "Option 2"],
  allowComments: false,
  submitButtonText: "Next",
  logic: [],
});

const Content = () => {
  const [questions, setQuestions] = useState([createQuestion()]);

  return (
    <div className="space-y-6">
      <Introduction
        questions={questions}
        setQuestions={setQuestions}
      />

      <div className="space-y-5">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;