// src/components/Result.js
import React from "react";

const Result = ({ answers, score }) => {
  return (
    <div>
      <h2>Your Results</h2>
      <h3>Score: {score} / {answers.length}</h3>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Question</th>
            <th>Total Options</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((answer, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{answer.question}</td>

              {/* Display all options in a single cell */}
              <td>
                {answer.options.map((option, idx) => (
                  <div key={idx}>{option}</div>
                ))}
              </td>

              {/* Color-coded cell for selected answer */}
              <td
                style={{
                  backgroundColor: answer.isCorrect ? "lightgreen" : "salmon",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {answer.selectedAnswer}
              </td>

              {/* Correct Answer */}
              <td>{answer.correctAnswer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
