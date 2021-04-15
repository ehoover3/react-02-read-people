import React from "react";
import {
  ArrowUpCircle,
  Bricks,
  CheckCircle,
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
        <Link to="/2_Learn/Quiz">
          <QuestionCircle className="QuizMenu_ArrowUpCircle" />
          <div>Dog Body Language</div>
        </Link>
      </div>

      {/* <div className="QuizMenu_Line">
        <Button variant="light" disabled>
          Dog Body Language
        </Button>
      </div> */}

      <div className="QuizMenu_Line">
        <div className="QuizMenu_FlexColumn">
          <Link to="/2_Learn/Video1">
            <PlayCircle className="QuizMenu_ArrowUpCircle" />
            <div>Empathy</div>
          </Link>
        </div>
        <div className="QuizMenu_FlexColumn">
          <CheckCircle className="QuizMenu_ArrowUpCircle" />
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
        <Link to="/2_Learn/Video2">
          <PlayCircle className="QuizMenu_ArrowUpCircle" />
          <div>Let Them Go</div>
        </Link>
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
