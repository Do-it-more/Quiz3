// File: src/components/Result.js

import React from "react";

const Result = ({ score, total }) => {
  return (
    <div>
      <h1>Quiz Completed!</h1>
      <p>Your Score: {score} / {total}</p>
    </div>
  );
};

export default Result;
