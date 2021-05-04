import React, { useEffect } from "react";
import { Bricks } from "react-bootstrap-icons";
import MenuItem from "./2menuItem.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faFrog } from "@fortawesome/free-solid-svg-icons";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import { faHorse } from "@fortawesome/free-solid-svg-icons";
import { faHotTub } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faRadiation } from "@fortawesome/free-solid-svg-icons";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";
import { faRestroom } from "@fortawesome/free-solid-svg-icons";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import {
  useStore,
  STORE_VIDEO,
  STORE_VIDEO_TITLE,
  STORE_VIDEO_ID,
} from "../../store/store";
let red = "red";
function Menu() {
  const dispatch = useStore((state) => state.dispatch);

  function updateVideo() {
    dispatch({ type: STORE_VIDEO_TITLE, payload: "Brené Brown on Empathy" });
    dispatch({ type: STORE_VIDEO_ID, payload: "1Evwgu369Jw" });
  }

  return (
    <>
      {/* LINE 1 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Brené Brown on Empathy",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "1Evwgu369Jw" });
          }}
        >
          <MenuItem
            menuText={"Empathy"}
            icon={"HandHeart"}
            onClick={() => {
              dispatch({
                type: STORE_VIDEO_TITLE,
                payload: "Brené Brown on Empathy",
              });
              dispatch({ type: STORE_VIDEO_ID, payload: "1Evwgu369Jw" });
            }}
            link={"/Grow/Video"}
          />
        </button>
      </div>

      {/* LINE 2 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Name It To Tame It",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "ZcDLzppD4Jc" });
          }}
        >
          <MenuItem
            menuText={"Name It To Tame It"}
            icon={"Brain"}
            // onClick={() => updateVideo("video2")}
            onClick={() => {
              dispatch({
                type: STORE_VIDEO,
                payload: "apple",
              });
            }}
            link={"/Grow/Video"}
          />
        </button>

        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Drama Triangle",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "ovrVv_RlCMw" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Read Signs"} icon={"Map"} />
        </button>
      </div>
      {/* LINE 3 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Needs",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "O-4ithG_07Q" });
          }}
        >
          <MenuItem link={"/Grow/Quiz2"} menuText={"Face"} icon={"User"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Let Them Go",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "CTPzXwNVc9g" });
          }}
        >
          <MenuItem link={"/Grow/Quiz3"} menuText={"Eyes"} icon={"Eye"} />
        </button>
      </div>
      {/* LINE 4 */}
      <div className="QuizMenu_Line">
        <MenuItem link={"/Grow/Quiz1"} menuText={"Dog"} icon={"Dog"} />
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Build Trust",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "rgWnadSi91s" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Horse"} icon={"Horse"} />
        </button>
      </div>
      {/* LINE 5 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Run and Read",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "7XT6yeRErWM" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Frog"} icon={"Frog"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Your Story",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "9QVy8RWylUo" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Bird"} icon={"Bird"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Power of Now",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "ykmwCyHlDXM" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Cat"} icon={"Cat"} />
        </button>
      </div>
      {/* LINE 6 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Stand Up for You",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "Zdg4sU-xJjM" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Fish"} icon={"Fish"} />
        </button>
      </div>
      {/* LINE 7 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Vulnerability",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "AO6n9HmG0qM" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Drama Triangle"}
            icon={"Tri"}
          />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Boundaries",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "sUpZgwLQvSM" });
          }}
        >
          <MenuItem link={"/Grow"} menuText={"???"} icon={"Key"} />
        </button>
      </div>
      {/* LINE 8 */}
      <div className="QuizMenu_Line">
        <Bricks className="QuizMenu_Brick" />
      </div>
      {/* LINE 9 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Dale Carnegie",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "_uA_HkOJGjY" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Needs"} icon={"Battery"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "GasLighting",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "FISZshe9L3s" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Let Them Go"}
            icon={"Arrows"}
          />
        </button>
      </div>
      {/* LINE 10 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "7 Habits",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "WFc08j9eorQ" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Build Trust"}
            icon={"Seed"}
          />
        </button>
      </div>
      {/* LINE 11 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Bird Body Language",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "tjmVB_4062w" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Run + Read"}
            icon={"Book"}
          />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Horse Body Language",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "gseaM5RPmrY" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Your Story"}
            icon={"BookOpen"}
          />
        </button>
      </div>
      {/* LINE 12 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Cat Body Language",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "Mbf8jXV7X4E" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Power of Now"}
            icon={"Clock"}
          />
        </button>
      </div>
      {/* LINE 13 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Frog Body Language",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "qUp7lCcn0iw" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Stand Up"} icon={"Hike"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Exercise",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "v6n9snBQTic" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Vulnerability"}
            icon={"UserCircle"}
          />
        </button>
      </div>
      {/* LINE 14 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Blame",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "RZWf2_2L2v8" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Boundaries"}
            icon={"Rest"}
          />
        </button>
      </div>
      {/* LINE 15 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Creativity",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "gseaM5RPmrY" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Dale Carnegie"}
            icon={"Bulb"}
          />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Bacteria",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "DGzn6VrBgQc" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Gaslighting"}
            icon={"Fire"}
          />
        </button>
      </div>
      {/* LINE 16 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Read Signs",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "hIV1s9GcZuw" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Blame"} icon={"Toxic"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Name It To Tame It",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "ZcDLzppD4Jc" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"7 Habits"} icon={"Habit"} />
        </button>
      </div>
      {/* LINE 17 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Fish",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "dkP8NUwB2io" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Self-Care"} icon={"Tub"} />
        </button>
      </div>
      {/* LINE 18 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Self-Care",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "Mqqxi8mt4t0" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Bedside Manner"}
            icon={"Med"}
          />
        </button>
      </div>
      {/* LINE 19 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Name It To Tame It",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "ZcDLzppD4Jc" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Tree"} icon={"Tree"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Trees",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "V4m9SefyRjg" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Tools"} icon={"Tools"} />
        </button>
      </div>
      {/* LINE 20 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Voice",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "p_ylzGfHKOs" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Negotiate"} icon={"Star"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Toolkit",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "rky5QbFISVk" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Exercise"} icon={"Run"} />
        </button>
      </div>
      {/* LINE 21 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Name It To Tame It",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "ZcDLzppD4Jc" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Creativity"} icon={"Art"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "See",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "8fkEBERWBL0" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"See"} icon={"Search"} />
        </button>
      </div>
      {/* LINE 22 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Negotiate",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "bekmTBQ_bXI" });
          }}
        >
          <MenuItem
            link={"/Grow/Video"}
            menuText={"Aristotle"}
            icon={"Balance"}
          />
        </button>
      </div>
      {/* LINE 23 */}
      <div className="QuizMenu_Line">
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Aristotle",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "YmZqEsZfWyc" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Weather"} icon={"Cloudy"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Weather",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "I00vcHLJXCc" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Bug"} icon={"Bug"} />
        </button>
        <button
          onClick={() => {
            dispatch({
              type: STORE_VIDEO_TITLE,
              payload: "Bug",
            });
            dispatch({ type: STORE_VIDEO_ID, payload: "F5DsQfZNw8o" });
          }}
        >
          <MenuItem link={"/Grow/Video"} menuText={"Voice"} icon={"Volume"} />
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
