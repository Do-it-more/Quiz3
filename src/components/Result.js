// src/components/Result.js
import React from "react";

const Result = ({ answers }) => {
  return (
    <div>
      <h2>Your Answers Submitted</h2>
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
              <td>{answer.selectedAnswer}</td>
              <td>{answer.correctAnswer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
