// File: src/components/Question.js

import React from "react";
import { Button, Radio } from "antd";

const Question = ({ data, onAnswerSelected }) => {
  return (
    <div>
      <h2>{data.question}</h2>
      <Radio.Group onChange={(e) => onAnswerSelected(e.target.value)}>
        {data.options.map((option, index) => (
          <Radio key={index} value={option}>
            {option}
          </Radio>
        ))}
      </Radio.Group>
      <Button type="primary" onClick={() => onAnswerSelected(null)}>
        Next
      </Button>
    </div>
  );
};

export default Question;
