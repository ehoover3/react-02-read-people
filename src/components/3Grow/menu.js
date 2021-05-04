import React from "react";
import { Bricks } from "react-bootstrap-icons";
import MenuItem from "./menuItem.js";
import { useStore, STORE_VIDEO_TITLE, STORE_VIDEO_ID } from "../../store/store";

function Menu() {
  const dispatch = useStore((state) => state.dispatch);

  function open(title, id) {
    dispatch({
      type: STORE_VIDEO_TITLE,
      payload: title,
    });
    dispatch({ type: STORE_VIDEO_ID, payload: id });
  }

  return (
    <>
      {/* LINE 1 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Brené Brown on Empathy", "1Evwgu369Jw")}>
          <MenuItem txt={"Empathy"} img={"HandHeart"} link={"/Video"} />
        </button>
      </div>

      {/* LINE 2 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Name It To Tame It", "ZcDLzppD4Jc")}>
          <MenuItem txt={"Name It To Tame It"} img={"Brain"} link={"/Video"} />
        </button>

        <button onClick={() => open("Drama Triangle", "ovrVv_RlCMw")}>
          <MenuItem link={"/Video"} txt={"Read Signs"} img={"Map"} />
        </button>
      </div>

      {/* LINE 3 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Needs", "O-4ithG_07Q")}>
          <MenuItem link={"/Grow/Quiz2"} txt={"Face"} img={"User"} />
        </button>

        <button onClick={() => open("Let Them Go", "CTPzXwNVc9g")}>
          <MenuItem link={"/Grow/Quiz3"} txt={"Eyes"} img={"Eye"} />
        </button>
      </div>

      {/* LINE 4 */}
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Quiz1"} txt={"Dog"} img={"Dog"} />

        <button onClick={() => open("Build Trust", "rgWnadSi91s")}>
          <MenuItem link={"/Video"} txt={"Horse"} img={"Horse"} />
        </button>
      </div>

      {/* LINE 5 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Run and Read", "7XT6yeRErWM")}>
          <MenuItem link={"/Video"} txt={"Frog"} img={"Frog"} />
        </button>

        <button onClick={() => open("Your Story", "9QVy8RWylUo")}>
          <MenuItem link={"/Video"} txt={"Bird"} img={"Bird"} />
        </button>

        <button onClick={() => open("Power of Now", "ykmwCyHlDXM")}>
          <MenuItem link={"/Video"} txt={"Cat"} img={"Cat"} />
        </button>
      </div>

      {/* LINE 6 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Stand Up for You", "Zdg4sU-xJjM")}>
          <MenuItem link={"/Video"} txt={"Fish"} img={"Fish"} />
        </button>
      </div>

      {/* LINE 7 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Vulnerability", "AO6n9HmG0qM")}>
          <MenuItem link={"/Video"} txt={"Drama Triangle"} img={"Tri"} />
        </button>

        <button onClick={() => open("Boundaries", "sUpZgwLQvSM")}>
          <MenuItem link={"/Video"} txt={"Boundaries"} img={"Key"} />
        </button>
      </div>

      {/* LINE 8 */}
      <div className="QuizMenu_Line">
        <Bricks className="QuizMenu_Brick" />
      </div>

      {/* LINE 9 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Dale Carnegie", "_uA_HkOJGjY")}>
          <MenuItem link={"/Video"} txt={"Needs"} img={"Battery"} />
        </button>

        <button onClick={() => open("Gaslighting", "FISZshe9L3s")}>
          <MenuItem link={"/Video"} txt={"Let Them Go"} img={"Arrows"} />
        </button>
      </div>

      {/* LINE 10 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("7 Habits", "WFc08j9eorQ")}>
          <MenuItem link={"/Video"} txt={"Build Trust"} img={"Seed"} />
        </button>
      </div>

      {/* LINE 11 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Bird Body Language", "tjmVB_4062w")}>
          <MenuItem link={"/Video"} txt={"Run + Read"} img={"Book"} />
        </button>

        <button onClick={() => open("Horse Body Language", "gseaM5RPmrY")}>
          <MenuItem link={"/Video"} txt={"Your Story"} img={"BookOpen"} />
        </button>
      </div>

      {/* LINE 12 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Cat Body Language", "Mbf8jXV7X4E")}>
          <MenuItem link={"/Video"} txt={"Power of Now"} img={"Clock"} />
        </button>
      </div>

      {/* LINE 13 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Frog Body Language", "qUp7lCcn0iw")}>
          <MenuItem link={"/Video"} txt={"Stand Up"} img={"Hike"} />
        </button>

        <button onClick={() => open("Exercise", "v6n9snBQTic")}>
          <MenuItem link={"/Video"} txt={"Vulnerability"} img={"UserCircle"} />
        </button>
      </div>

      {/* LINE 14 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Blame", "RZWf2_2L2v8")}>
          <MenuItem link={"/Video"} txt={"Boundaries"} img={"Rest"} />
        </button>
      </div>

      {/* LINE 15 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Creativity", "gseaM5RPmrY")}>
          <MenuItem link={"/Video"} txt={"Dale Carnegie"} img={"Bulb"} />
        </button>

        <button onClick={() => open("Bacteria", "DGzn6VrBgQc")}>
          <MenuItem link={"/Video"} txt={"Gaslighting"} img={"Fire"} />
        </button>
      </div>

      {/* LINE 16 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Read Signs", "hIV1s9GcZuw")}>
          <MenuItem link={"/Video"} txt={"Blame"} img={"Toxic"} />
        </button>

        <button onClick={() => open("Name It To Tame It", "ZcDLzppD4Jc")}>
          <MenuItem link={"/Video"} txt={"7 Habits"} img={"Habit"} />
        </button>
      </div>

      {/* LINE 17 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Fish", "dkP8NUwB2io")}>
          <MenuItem link={"/Video"} txt={"Self-Care"} img={"Tub"} />
        </button>
      </div>

      {/* LINE 18 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Self-Care", "Mqqxi8mt4t0")}>
          <MenuItem link={"/Video"} txt={"Bedside Manner"} img={"Med"} />
        </button>
      </div>

      {/* LINE 19 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Name It To Tame It", "ZcDLzppD4Jc")}>
          <MenuItem link={"/Video"} txt={"Tree"} img={"Tree"} />
        </button>

        <button onClick={() => open("Trees", "V4m9SefyRjg")}>
          <MenuItem link={"/Video"} txt={"Tools"} img={"Tools"} />
        </button>
      </div>

      {/* LINE 20 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Voice", "p_ylzGfHKOs")}>
          <MenuItem link={"/Video"} txt={"Negotiate"} img={"Star"} />
        </button>

        <button onClick={() => open("Toolkit", "rky5QbFISVk")}>
          <MenuItem link={"/Video"} txt={"Exercise"} img={"Run"} />
        </button>
      </div>

      {/* LINE 21 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Name It To Tame It", "ZcDLzppD4Jc")}>
          <MenuItem link={"/Video"} txt={"Creativity"} img={"Art"} />
        </button>

        <button onClick={() => open("See", "8fkEBERWBL0")}>
          <MenuItem link={"/Video"} txt={"See"} img={"Search"} />
        </button>
      </div>

      {/* LINE 22 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Negotiate", "bekmTBQ_bXI")}>
          <MenuItem link={"/Video"} txt={"Aristotle"} img={"Balance"} />
        </button>
      </div>

      {/* LINE 23 */}
      <div className="QuizMenu_Line">
        <button onClick={() => open("Aristotle", "YmZqEsZfWyc")}>
          <MenuItem link={"/Video"} txt={"Weather"} img={"Cloudy"} />
        </button>

        <button onClick={() => open("Weather", "I00vcHLJXCc")}>
          <MenuItem link={"/Video"} txt={"Bug"} img={"Bug"} />
        </button>

        <button onClick={() => open("Bug", "F5DsQfZNw8o")}>
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
