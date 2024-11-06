// src/components/Question.js
import React from "react";

const Question = ({ questionData, selectedOption, handleSelectOption }) => {
  return (
    <div>
      <h3>{questionData.question}</h3>
      <ul>
        {questionData.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleSelectOption(option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
