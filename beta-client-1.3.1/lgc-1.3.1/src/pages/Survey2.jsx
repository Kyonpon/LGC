import React, { useState, useEffect } from "react";
import BasicNavbar from "../components/BasicNavbar";

const Survey2 = () => {
  const departments = ["COE", "CAS", "CONAH", "CTE"];

  const questions = [
    {
      questionNumber: 1,
      question: "What are your primary interests and strengths?",
      options: [
        { name: "COE", value: "3", label: "Engineering and problem-solving" },
        {
          name: "CAS",
          value: "1",
          label: "Humanities, arts, or social sciences",
        },
        { name: "CONAH", value: "2", label: "Natural and health sciences" },
        {
          name: "CTE",
          value: "2",
          label: "Technological innovation and practical applications",
        },
        // Add more options here if needed
      ],
    },
    {
      questionNumber: 2,
      question: "Which subjects or areas do you enjoy the most?",
      options: [
        { name: "COE", value: "3", label: "Mathematics and physics" },
        { name: "CAS", value: "1", label: "Literature, languages, or history" },
        {
          name: "CONAH",
          value: "2",
          label: "Biology, chemistry, or environmental studies",
        },
        {
          name: "CTE",
          value: "2",
          label: "Computer science, programming, or technical skills",
        },
      ],
    },
    // Add more questions here if needed
  ];

  const [scores, setScores] = useState(
    questions.reduce(
      (acc, question) => ({ ...acc, [question.questionNumber]: {} }),
      {}
    )
  );

  const [highestDepartment, setHighestDepartment] = useState("");

  useEffect(() => {
    let department = departments[0];

    for (let i = 1; i < departments.length; i++) {
      const currentDepartment = departments[i];
      if (scores[currentDepartment] > scores[department]) {
        department = currentDepartment;
      }
    }

    setHighestDepartment(department);
  }, [scores, departments]); // Include departments as a dependency

  const handleOptionChange = (event) => {
    const { name, value, checked } = event.target;

    const [questionNumber, department] = name.split("-");
    const updatedScore = checked ? parseInt(value) : 0;

    setScores((prevScores) => ({
      ...prevScores,
      [questionNumber]: {
        ...prevScores[questionNumber],
        [department]: updatedScore,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Based on your responses, the recommended department is ${highestDepartment}.`
    );
  };

  return (
    <>
      <h1>SURVEY</h1>
      <form onSubmit={handleSubmit}>
        <h1>Department Selection Survey</h1>
        <p>Choose the option(s) that best represent your preferences:</p>

        {questions.map((question) => (
          <div className="Questions" key={question.questionNumber}>
            <h4>Question {question.questionNumber}:</h4>
            <h5>{question.question}</h5>
            {question.options.map((option) => (
              <section
                className="mult-choice"
                key={`${question.questionNumber}-${option.name}`}
              >
                <input
                  type="checkbox"
                  name={`${question.questionNumber}-${option.name}`}
                  value={option.value}
                  checked={
                    scores[question.questionNumber] &&
                    scores[question.questionNumber][option.name] ===
                      parseInt(option.value)
                  }
                  onChange={handleOptionChange}
                />
                {option.label}
              </section>
            ))}
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>

      {highestDepartment && <h2>Highest Department: {highestDepartment}</h2>}

      <BasicNavbar />
    </>
  );
};

export default Survey2;
