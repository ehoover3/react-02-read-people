import React from "react";
import { Bricks, CheckCircle } from "react-bootstrap-icons";
import MenuItem from "./MenuItem.js";

function Menu(props) {
  return (
    <>
      <div className="QuizMenu_Line">
        <MenuItem
          link={"/Grow/Video1"}
          menuText={"Empathy"}
          icon={"HandHeart"}
        />
        {/* <MenuItem
          link={"/Grow/Video"}
          menuText={"Empathy"}
          videoTitle="Brené Brown on Empathy"
          icon={"HandHeart"}
          videoId={"tjmVB_4062w"}
        /> */}
      </div>
      <div className="QuizMenu_Line">
        <MenuItem
          link={"/Grow/Video2"}
          menuText={"Name It To Tame It"}
          icon={"Brain"}
        />
        <MenuItem link={"/Grow/Video35"} menuText={"Read Signs"} icon={"Map"} />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Quiz2"} menuText={"Face"} icon={"User"} />
        <MenuItem link={"/Grow/Quiz3"} menuText={"Eyes"} icon={"Eye"} />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Quiz1"} menuText={"Dog"} icon={"Dog"} />
        <MenuItem link={"/Grow/Video17"} menuText={"Horse"} icon={"Horse"} />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video19"} menuText={"Frog"} icon={"Frog"} />
        <MenuItem link={"/Grow/Video16"} menuText={"Bird"} icon={"Bird"} />
        <MenuItem link={"/Grow/Video18"} menuText={"Cat"} icon={"Cat"} />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video31"} menuText={"Fish"} icon={"Fish"} />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem
          link={"/Grow/Video3"}
          menuText={"Drama Triangle"}
          icon={"Tri"}
        />
        <MenuItem link={"/Grow"} menuText={"???"} icon={"Key"} />
      </div>
      <div className="QuizMenu_Line">
        <Bricks className="QuizMenu_Brick" />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video4"} menuText={"Needs"} icon={"Battery"} />
        <MenuItem
          link={"/Grow/Video5"}
          menuText={"Let Them Go"}
          icon={"Arrows"}
        />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem
          link={"/Grow/Video6"}
          menuText={"Build Trust"}
          icon={"Seed"}
        />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video7"} menuText={"Run + Read"} icon={"Book"} />
        <MenuItem
          link={"/Grow/Video8"}
          menuText={"Your Story"}
          icon={"BookOpen"}
        />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem
          link={"/Grow/Video9"}
          menuText={"Power of Now"}
          icon={"Clock"}
        />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video10"} menuText={"Stand Up"} icon={"Hike"} />
        <MenuItem
          link={"/Grow/Video11"}
          menuText={"Vulnerability"}
          icon={"UserCircle"}
        />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem
          link={"/Grow/Video12"}
          menuText={"Boundaries"}
          icon={"Rest"}
        />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem
          link={"/Grow/Video13"}
          menuText={"Dale Carnegie"}
          icon={"Bulb"}
        />
        <MenuItem
          link={"/Grow/Video14"}
          menuText={"Gaslighting"}
          icon={"Fire"}
        />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video21"} menuText={"Blame"} icon={"Toxic"} />

        <MenuItem link={"/Grow/Video15"} menuText={"7 Habits"} icon={"Habit"} />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video27"} menuText={"Self-Care"} icon={"Tub"} />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem
          link={"/Grow/Video25"}
          menuText={"Bedside Manner"}
          icon={"Med"}
        />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video24"} menuText={"Tree"} icon={"Tree"} />
        <MenuItem link={"/Grow/Video33"} menuText={"Tools"} icon={"Tools"} />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video34"} menuText={"Negotiate"} icon={"Star"} />
        <MenuItem link={"/Grow/Video20"} menuText={"Exercise"} icon={"Run"} />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video22"} menuText={"Creativity"} icon={"Art"} />
        <MenuItem link={"/Grow/Video23"} menuText={"See"} icon={"Search"} />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem
          link={"/Grow/Video26"}
          menuText={"Aristotle"}
          icon={"Balance"}
        />
      </div>
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Video28"} menuText={"Weather"} icon={"Cloudy"} />
        <MenuItem link={"/Grow/Video29"} menuText={"Bug"} icon={"Bug"} />
        <MenuItem link={"/Grow/Video32"} menuText={"Voice"} icon={"Volume"} />
      </div>
      <div className="QuizMenu_Line">
        <Bricks className="QuizMenu_Brick" />
      </div>
    </>
  );
}

export default Menu;
