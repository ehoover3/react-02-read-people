import React, { useState } from "react";
import info3 from "./Info3.js";
import { ProgressBar } from "react-bootstrap";
import { useStore, STORE_ADD_GEMS } from "../../../store/store";
import { Link } from "react-router-dom";

export default function Quiz2() {
  const dispatch = useStore((state) => state.dispatch);
  const gems = useStore((state) => state.gems);

  let questions = info3;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // STEP 1
    if (isCorrect) {
      setScore(score + 1);
    }
    // STEP 2
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      // Add 1 to Gem Count
      dispatch({
        type: STORE_ADD_GEMS,
        payload: gems + 1,
      });
    }
  };

  if (showScore === false) {
    return (
      <div>
        <div className="Nav_SpaceVertical"></div>
        {/* PROGRESS BAR */}
        <ProgressBar variant="success" now={currentQuestion * 25} />
        {/* QUESTION SECTION */}
        <div>
          <div className="Quiz_QuestionContainer">
            Question {currentQuestion + 1}/{questions.length}
          </div>
          <div className="Quiz_QuestionContainer">
            {questions[currentQuestion].question}
          </div>
        </div>
        {/* ANSWER SECTION */}
        <div className="Quiz_AnswerContainer">
          {questions[currentQuestion].answerOptions.map((answer) => (
            <button
              className="Quiz2_Button"
              onClick={() => handleAnswerClick(answer.isCorrect)}
            >
              <img src={answer.answerText}></img>
            </button>
          ))}
        </div>
      </div>
    );
  } else if (showScore === true) {
    return (
      <div>
        <div className="Nav_SpaceVertical"></div>
        <ProgressBar variant="success" now={100} />{" "}
        <div className="Quiz_ResultsContainer">
          You scored {score} out of {questions.length}
          <Link to="/Grow">Continue to Grow</Link>
        </div>
      </div>
    );
  }
}
