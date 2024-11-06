import React, { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import questions from "./data/questions";
import "./styles/QuizApp.css";

// Function to shuffle and pick 10 random questions
function getRandomQuestions() {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
}

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const randomQuestions = getRandomQuestions();

  const handleNext = () => {
    if (selectedOption === null) {
      setErrorMessage("Please select an option to proceed.");
      return;
    }

    setErrorMessage(""); // Clear error message if validation passes
    const answer = {
      question: randomQuestions[currentQuestionIndex].question,
      options: randomQuestions[currentQuestionIndex].options,
      correctAnswer: randomQuestions[currentQuestionIndex].correctAnswer,
      selectedAnswer: selectedOption,
    };
    setAnswers([...answers, answer]);
    setSelectedOption(null); // Reset selected option for the next question

    if (currentQuestionIndex + 1 < randomQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true); // Show result if it's the last question
    }
  };

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <h2>Simple Quiz Application</h2>
          <p>Question No. {currentQuestionIndex + 1} of {randomQuestions.length}</p>
          <Question
            questionData={randomQuestions[currentQuestionIndex]}
            selectedOption={selectedOption}
            handleSelectOption={handleSelectOption}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button onClick={handleNext} className="next-button">Next</button>
        </div>
      ) : (
        <Result answers={answers} />
      )}
    </div>
  );
};

export default QuizApp;
