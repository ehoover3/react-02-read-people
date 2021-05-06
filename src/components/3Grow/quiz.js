import React, { useState } from "react";
import info1, { info2 } from "./quizPics.js";
import { ProgressBar } from "react-bootstrap";
import { useStore, STORE_COUNT } from "../../store/store";
import { Link } from "react-router-dom";
// import info2 from "./quizzes/info2";

export default function Quiz() {
  let questions = "";
  const quizID = useStore((state) => state.quizID);
  if (quizID !== "") {
    questions = quizID;
  } else {
    questions = info1;
  }

  console.log(quizID);
  console.log(questions);

  const dispatch = useStore((state) => state.dispatch);
  const count = useStore((state) => state.count);
  const [alert, setAlert] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentQuestion2, setCurrentQuestion2] = useState(1);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [overlay, setOverlay] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleAnswerClick = (isCorrect, answer) => {
    setOverlay(true); // open feedback
    setFeedback(
      () => questions[currentQuestion].answerOptions[currentQuestion].answerText
    );
    console.log(questions[currentQuestion].answerOptions[0].isCorrect);
    console.log(questions[currentQuestion].answerOptions[1].isCorrect);
    console.log(questions[currentQuestion].answerOptions[2].isCorrect);
    console.log(questions[currentQuestion].answerOptions[3].isCorrect);
    console.log(feedback);
  };

  const handleFeedbackClick = (isCorrect) => {
    setOverlay(false); // close feedback

    // STEP 1 - Update Score
    if (isCorrect) {
      setScore(score + 1);
    }

    // STEP 2 - Load Next Question
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      // Step 3a - Render Next Question
      setCurrentQuestion(nextQuestion);
    }
    // Step 3b - Render Results
    else {
      // Render Score
      setShowScore(true);
      // Add 1 to Count
      dispatch({
        type: STORE_COUNT,
        payload: count + 1,
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
              className="Quiz_Button"
              onClick={() => handleAnswerClick(answer)}
            >
              <img src={answer.answerText} key={currentQuestion}></img>
            </button>
          ))}
        </div>

        <div className={overlay ? "Quiz_Overlay_Hide" : "Quiz_Overlay_Show"}>
          <button
            onClick={handleFeedbackClick}
            // onClick={() => setAlert(true)}
          >
            &times;
          </button>
          <div>test {feedback}</div>
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
