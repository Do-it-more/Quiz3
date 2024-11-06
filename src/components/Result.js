// src/components/Result.js
import React from "react";

const Result = ({ answers, score }) => {
  return (
    <div>
      <h2>Your Answers Submitted</h2>
      <h3>Score: {score} / {answers.length}</h3> {/* Display score */}
      
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((answer, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{answer.question}</td>
              <td
                style={{
                  backgroundColor: answer.isCorrect ? "lightgreen" : "salmon",
                  color: answer.isCorrect ? "black" : "white",
                }}
              >
                {answer.selectedAnswer}
              </td>
              <td>{answer.correctAnswer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
