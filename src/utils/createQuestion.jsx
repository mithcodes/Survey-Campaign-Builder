const createQuestion = () => ({
  id: crypto.randomUUID(),
  title: "",
  description: "",
  options: ["Option 1", "Option 2"],
  allowComments: false,
  submitButtonText: "Next",
  logic: [],
});

export default createQuestion;