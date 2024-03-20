import React from "react";
import { useSelector } from "react-redux";
import { fetchTriviaQuestions } from "../../api";


export const QuizPage = () => {
  const quizPreferences = useSelector((state) => state.quizPreferences);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (quizPreferences) {
      fetchQuestions();
    }
  }, [quizPreferences]);

  const fetchQuestions = async () => {
    const { category, difficulty, numQuestions } = quizPreferences;
    const fetchedQuestions = await fetchTriviaQuestions(
      numQuestions,
      category,
      difficulty
    );
    setQuestions(fetchedQuestions);
  };

  useEffect(() => {
    const handleTimer = () => {
      if (timer > 0) {
        setTimeout(() => setTimer(timer - 1), 1000);
      }
    };

    handleTimer();

    return () => clearTimeout(handleTimer);
  }, [timer]);
  const handleAnswerSelect = (option) => {
    setSelectedOption(option);
    // Check if answer is correct and provide feedback
    // Move to the next question or end the quiz
  };

  return (
    <div>
      {questions.length > 0 && (
        <div>
          <h2>
            Question {currentQuestionIndex + 1} of {questions.length}
          </h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              /* Handle Next Button Click */
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
