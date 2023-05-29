import React from "react";

const Question = ({ question, options, handleAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              name={question}
              value={option.dept}
              onChange={handleAnswer}
            />
            {option.text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Question;
