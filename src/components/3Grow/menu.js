import React from "react";
import { Bricks } from "react-bootstrap-icons";
import MenuItem from "./menuItem.js";
import {
  useStore,
  STORE_VIDEO_TITLE,
  STORE_VIDEO_ID,
  STORE_QUIZ_ID,
} from "../../store/store";
import info1, { info2, info3 } from "./quizPics.js";

function Menu() {
  const dispatch = useStore((state) => state.dispatch);

  function openVideo(title, id) {
    dispatch({
      type: STORE_VIDEO_TITLE,
      payload: title,
    });
    dispatch({ type: STORE_VIDEO_ID, payload: id });
  }

  function openQuiz(file) {
    dispatch({
      type: STORE_QUIZ_ID,
      payload: file,
    });
    dispatch({ type: STORE_QUIZ_ID, payload: file });
  }

  return (
    <>
      {/* LINE 1 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => openVideo("Brené Brown on Empathy", "1Evwgu369Jw")}
        >
          <MenuItem txt={"Empathy"} img={"HandHeart"} link={"/Video"} />
        </button>
      </div>

      {/* LINE 2 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Name It To Tame It", "ZcDLzppD4Jc")}>
          <MenuItem txt={"Name It To Tame It"} img={"Brain"} link={"/Video"} />
        </button>

        <button onClick={() => openVideo("Drama Triangle", "ovrVv_RlCMw")}>
          <MenuItem link={"/Video"} txt={"Read Signs"} img={"Map"} />
        </button>
      </div>

      {/* LINE 3 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openQuiz(info2)}>
          <MenuItem link={"/Quiz"} txt={"Face"} img={"User"} />
        </button>

        <button onClick={() => openQuiz(info3)}>
          <MenuItem link={"/Quiz"} txt={"Eyes"} img={"Eye"} />
        </button>
      </div>

      {/* LINE 4 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openQuiz(info1)}>
          <MenuItem link={"/Quiz"} txt={"Dog"} img={"Dog"} />
        </button>

        <button onClick={() => openVideo("Build Trust", "rgWnadSi91s")}>
          <MenuItem link={"/Video"} txt={"Horse"} img={"Horse"} />
        </button>
      </div>

      {/* LINE 5 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Run and Read", "7XT6yeRErWM")}>
          <MenuItem link={"/Video"} txt={"Frog"} img={"Frog"} />
        </button>

        <button onClick={() => openVideo("Your Story", "9QVy8RWylUo")}>
          <MenuItem link={"/Video"} txt={"Bird"} img={"Bird"} />
        </button>

        <button onClick={() => openVideo("Power of Now", "ykmwCyHlDXM")}>
          <MenuItem link={"/Video"} txt={"Cat"} img={"Cat"} />
        </button>
      </div>

      {/* LINE 6 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Stand Up for You", "Zdg4sU-xJjM")}>
          <MenuItem link={"/Video"} txt={"Fish"} img={"Fish"} />
        </button>
      </div>

      {/* LINE 7 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Vulnerability", "AO6n9HmG0qM")}>
          <MenuItem link={"/Video"} txt={"Drama Triangle"} img={"Tri"} />
        </button>

        <button onClick={() => openVideo("Boundaries", "sUpZgwLQvSM")}>
          <MenuItem link={"/Video"} txt={"Boundaries"} img={"Key"} />
        </button>
      </div>

      {/* LINE 8 */}
      <div className="QuizMenu_Line">
        <Bricks className="QuizMenu_Brick" />
      </div>

      {/* LINE 9 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Dale Carnegie", "_uA_HkOJGjY")}>
          <MenuItem link={"/Video"} txt={"Needs"} img={"Battery"} />
        </button>

        <button onClick={() => openVideo("Gaslighting", "FISZshe9L3s")}>
          <MenuItem link={"/Video"} txt={"Let Them Go"} img={"Arrows"} />
        </button>
      </div>

      {/* LINE 10 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("7 Habits", "WFc08j9eorQ")}>
          <MenuItem link={"/Video"} txt={"Build Trust"} img={"Seed"} />
        </button>
      </div>

      {/* LINE 11 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Bird Body Language", "tjmVB_4062w")}>
          <MenuItem link={"/Video"} txt={"Run + Read"} img={"Book"} />
        </button>

        <button onClick={() => openVideo("Horse Body Language", "gseaM5RPmrY")}>
          <MenuItem link={"/Video"} txt={"Your Story"} img={"BookOpen"} />
        </button>
      </div>

      {/* LINE 12 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Cat Body Language", "Mbf8jXV7X4E")}>
          <MenuItem link={"/Video"} txt={"Power of Now"} img={"Clock"} />
        </button>
      </div>

      {/* LINE 13 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Frog Body Language", "qUp7lCcn0iw")}>
          <MenuItem link={"/Video"} txt={"Stand Up"} img={"Hike"} />
        </button>

        <button onClick={() => openVideo("Exercise", "v6n9snBQTic")}>
          <MenuItem link={"/Video"} txt={"Vulnerability"} img={"UserCircle"} />
        </button>
      </div>

      {/* LINE 14 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Blame", "RZWf2_2L2v8")}>
          <MenuItem link={"/Video"} txt={"Boundaries"} img={"Rest"} />
        </button>
      </div>

      {/* LINE 15 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Creativity", "gseaM5RPmrY")}>
          <MenuItem link={"/Video"} txt={"Dale Carnegie"} img={"Bulb"} />
        </button>

        <button onClick={() => openVideo("Bacteria", "DGzn6VrBgQc")}>
          <MenuItem link={"/Video"} txt={"Gaslighting"} img={"Fire"} />
        </button>
      </div>

      {/* LINE 16 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Read Signs", "hIV1s9GcZuw")}>
          <MenuItem link={"/Video"} txt={"Blame"} img={"Toxic"} />
        </button>

        <button onClick={() => openVideo("Name It To Tame It", "ZcDLzppD4Jc")}>
          <MenuItem link={"/Video"} txt={"7 Habits"} img={"Habit"} />
        </button>
      </div>

      {/* LINE 17 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Fish", "dkP8NUwB2io")}>
          <MenuItem link={"/Video"} txt={"Self-Care"} img={"Tub"} />
        </button>
      </div>

      {/* LINE 18 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Self-Care", "Mqqxi8mt4t0")}>
          <MenuItem link={"/Video"} txt={"Bedside Manner"} img={"Med"} />
        </button>
      </div>

      {/* LINE 19 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Name It To Tame It", "ZcDLzppD4Jc")}>
          <MenuItem link={"/Video"} txt={"Tree"} img={"Tree"} />
        </button>

        <button onClick={() => openVideo("Trees", "V4m9SefyRjg")}>
          <MenuItem link={"/Video"} txt={"Tools"} img={"Tools"} />
        </button>
      </div>

      {/* LINE 20 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Voice", "p_ylzGfHKOs")}>
          <MenuItem link={"/Video"} txt={"Negotiate"} img={"Star"} />
        </button>

        <button onClick={() => openVideo("Toolkit", "rky5QbFISVk")}>
          <MenuItem link={"/Video"} txt={"Exercise"} img={"Run"} />
        </button>
      </div>

      {/* LINE 21 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Name It To Tame It", "ZcDLzppD4Jc")}>
          <MenuItem link={"/Video"} txt={"Creativity"} img={"Art"} />
        </button>

        <button onClick={() => openVideo("See", "8fkEBERWBL0")}>
          <MenuItem link={"/Video"} txt={"See"} img={"Search"} />
        </button>
      </div>

      {/* LINE 22 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Negotiate", "bekmTBQ_bXI")}>
          <MenuItem link={"/Video"} txt={"Aristotle"} img={"Balance"} />
        </button>
      </div>

      {/* LINE 23 */}
      <div className="QuizMenu_Line">
        <button onClick={() => openVideo("Aristotle", "YmZqEsZfWyc")}>
          <MenuItem link={"/Video"} txt={"Weather"} img={"Cloudy"} />
        </button>

        <button onClick={() => openVideo("Weather", "I00vcHLJXCc")}>
          <MenuItem link={"/Video"} txt={"Bug"} img={"Bug"} />
        </button>

        <button onClick={() => openVideo("Bug", "F5DsQfZNw8o")}>
          <MenuItem link={"/Video"} txt={"Voice"} img={"Volume"} />
        </button>
      </div>

      {/* LINE 24 */}
      <div className="QuizMenu_Line">
        <Bricks className="QuizMenu_Brick" />
      </div>
    </>
  );
}

export default Menu;
