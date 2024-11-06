// File: src/QuizApp.js

import React, { useState } from "react";
import { Button, Progress } from "antd";  // Importing Ant Design components
import questions from "./data/questions"; // Importing the questions array from questions.js
import Question from "./components/Question";
import Result from "./components/Result";
import "./styles/QuizApp.css";


// Function to select 10 random questions from the list
function getRandomQuestions() {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 10);
}

const QuizApp = () => {
  const [quizQuestions] = useState(getRandomQuestions());  // Select 10 random questions
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Function to handle the answer selection
  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setIsFinished(true);  // Quiz ends after the last question
    }
  };

  return (
    <div className="quiz-app">
      {isFinished ? (
        <Result score={score} total={quizQuestions.length} />
      ) : (
        <div>
          <Progress percent={(currentQuestionIndex / quizQuestions.length) * 100} />
          <Question
            data={quizQuestions[currentQuestionIndex]}
            onAnswerSelected={handleAnswer}
          />
        </div>
      )}
    </div>
  );
};

export default QuizApp;
