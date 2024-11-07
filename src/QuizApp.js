// QuizApp.js
import React, { useState } from "react";
import Question from "./components/Question";
import Result from "./components/Result";
import questions from "./data/questions";
import "./styles/QuizApp.css";

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
  const [score, setScore] = useState(0); // Initialize score

  // Updated handleNext function
  const handleNext = () => {
    if (selectedOption === null) {
      setErrorMessage("Please select an option to proceed.");
      return;
    }
  
    setErrorMessage("");
    const currentQuestion = randomQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
  
    // Debugging log
    console.log("Selected Option:", selectedOption);
    console.log("Correct Answer:", currentQuestion.correctAnswer);
    console.log("Is Correct:", isCorrect);
  
    const answer = {
      question: currentQuestion.question,
      options: currentQuestion.options,
      correctAnswer: currentQuestion.correctAnswer,
      selectedAnswer: selectedOption,
      isCorrect,
    };
  
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  
    // Update answers array
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = answer;
    setAnswers(updatedAnswers);
    setSelectedOption(null);
  
    if (currentQuestionIndex + 1 < randomQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };
  

  const handlePreview = () => {
    if (currentQuestionIndex > 0) {
      const previousAnswer = answers[currentQuestionIndex - 1];
      setSelectedOption(previousAnswer?.selectedAnswer || null);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
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
          <div className="button-container">
            {currentQuestionIndex > 0 && (
              <button onClick={handlePreview} className="preview-button">Preview</button>
            )}
            <button onClick={handleNext} className="next-button">Next</button>
          </div>
        </div>
      ) : (
        <Result answers={answers} score={score} />
      )}
    </div>
  );
};

export default QuizApp;
