import React, { useState } from "react";
import Question from "./Question";
import BasicNavbar from "../components/BasicNavbar";

const Survey = () => {
  const [answers, setAnswers] = useState([]);
  const [deptScores, setDeptScores] = useState({
    COE: 0,
    CAS: 0,
    CONAH: 0,
    CTE: 0,
  });

  const questions = [
    {
      question: "What are your primary interests and strengths?",
      options: [
        { text: "Engineering and problem-solving", dept: "COE" },
        { text: "Humanities, arts, or social sciences", dept: "CAS" },
        { text: "Natural and health sciences", dept: "CONAH" },
        {
          text: "Technological innovation and practical applications",
          dept: "CTE",
        },
      ],
    },

    {
      question: "What are your primary interests and strengths?",
      options: [
        { text: "Engineering and problem-solving", dept: "COE" },
        { text: "Humanities, arts, or social sciences", dept: "CAS" },
        { text: "Natural and health sciences", dept: "CONAH" },
        {
          text: "Technological innovation and practical applications",
          dept: "CTE",
        },
      ],
    },
    // Add more questions here...
  ];

  const handleAnswer = (e) => {
    const selectedDept = e.target.value;
    const isChecked = e.target.checked;

    const newAnswers = [...answers];

    if (isChecked) {
      newAnswers.push(selectedDept);
    } else {
      const index = newAnswers.indexOf(selectedDept);
      if (index !== -1) {
        newAnswers.splice(index, 1);
      }
    }

    setAnswers(newAnswers);

    const newDeptScores = { ...deptScores };
    newDeptScores[selectedDept] += isChecked ? 1 : -1;
    setDeptScores(newDeptScores);
  };

  const highestDeptScores = Object.entries(deptScores).reduce(
    (highest, [dept, score]) => {
      if (!highest || score > highest.score) {
        return { depts: [dept], score };
      } else if (score === highest.score) {
        highest.depts.push(dept);
      }
      return highest;
    },
    null
  );

  const highestDept =
    highestDeptScores && highestDeptScores.depts.length > 1
      ? highestDeptScores.depts.join(", ")
      : highestDeptScores.depts[0];

  return (
    <div>
      <h1>SURVERY FOR UNSURE DEPT </h1>
      {questions.map((q, index) => (
        <Question
          key={index}
          question={q.question}
          options={q.options}
          handleAnswer={handleAnswer}
        />
      ))}
      <h2>
        {highestDeptScores && highestDeptScores.depts.length > 1
          ? `Highest Scoring Departments: ${highestDept}`
          : `Highest Scoring Department: ${highestDept}`}
      </h2>
      <h3>Department Scores:</h3>
      <ul>
        {Object.entries(deptScores).map(([dept, score]) => (
          <li key={dept}>
            {dept}: {score}
          </li>
        ))}
      </ul>
      <BasicNavbar></BasicNavbar>
    </div>
  );
};

export default Survey;
