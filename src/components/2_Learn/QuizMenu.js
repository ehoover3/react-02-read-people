import React from "react";
import {
  ArrowUpCircle,
  Bricks,
  Check2Circle,
  InfoCircle,
  PersonCircle,
  PlayCircle,
  QuestionCircle,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function QuizMenu(props) {
  return (
    <>
      <div className="QuizMenu_Line">
        <Link to="/2_Learn/Quiz" className="">
          <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        </Link>
      </div>
      <div className="QuizMenu_Line">
        <Button variant="light" disabled>
          Dog Body Language
        </Button>
      </div>

      <div className="QuizMenu_Line">
        <div className="QuizMenu_FlexColumn">
          <PlayCircle className="QuizMenu_ArrowUpCircle" />
        </div>
        <div className="QuizMenu_FlexColumn">
          <Check2Circle className="QuizMenu_ArrowUpCircle" />
        </div>
      </div>

      <div className="QuizMenu_Line"></div>
      <div className="QuizMenu_Line">
        <InfoCircle className="QuizMenu_ArrowUpCircle" />
        <PersonCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <QuestionCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>

      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>

      <div className="QuizMenu_Line">
        <Bricks className="QuizMenu_Brick" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
        <ArrowUpCircle className="QuizMenu_ArrowUpCircle" />
      </div>
      <div className="QuizMenu_Line">
        <Bricks className="QuizMenu_Brick" />
      </div>
    </>
  );
}

export default QuizMenu;
