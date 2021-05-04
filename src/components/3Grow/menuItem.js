import React from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBaby } from "@fortawesome/free-solid-svg-icons";
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
// import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";
// import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
// import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
// import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
// import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faFrog } from "@fortawesome/free-solid-svg-icons";
// import { faGhost } from "@fortawesome/free-solid-svg-icons";
// import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
// import { faGuitar } from "@fortawesome/free-solid-svg-icons";
// import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import { faHorse } from "@fortawesome/free-solid-svg-icons";
import { faHotTub } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
// import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import { faQuestion } from "@fortawesome/free-solid-svg-icons";
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
// import { faWrench } from "@fortawesome/free-solid-svg-icons";

function MenuItem(props) {
  let img = "";
  switch (props.img) {
    case "Arrows":
      img = faPeopleArrows;
      break;
    case "Art":
      img = faPalette;
      break;
    case "Balance":
      img = faBalanceScale;
      break;
    case "Battery":
      img = faBatteryFull;
      break;
    case "Bird":
      img = faCrow;
      break;
    case "Book":
      img = faBook;
      break;
    case "BookOpen":
      img = faBookOpen;
      break;
    case "Brain":
      img = faBrain;
      break;
    case "Bug":
      img = faBug;
      break;
    case "Bulb":
      img = faLightbulb;
      break;
    case "Cat":
      img = faCat;
      break;
    case "Clock":
      img = faClock;
      break;
    case "Cloudy":
      img = faCloudSun;
      break;
    case "Dog":
      img = faDog;
      break;
    case "Eye":
      img = faEye;
      break;
    case "Fire":
      img = faFire;
      break;
    case "Fish":
      img = faFish;
      break;
    case "Frog":
      img = faFrog;
      break;
    case "HandHeart":
      img = faHandHoldingHeart;
      break;
    case "Habit":
      img = faRecycle;
      break;
    case "Heart":
      img = faHeart;
      break;
    case "Hike":
      img = faHiking;
      break;
    case "Horse":
      img = faHorse;
      break;
    case "Key":
      img = faKey;
      break;
    case "Leaf":
      img = faLeaf;
      break;
    case "Map":
      img = faMapSigns;
      break;
    case "Rest":
      img = faRestroom;
      break;
    case "Run":
      img = faRunning;
      break;
    case "Shield":
      img = faUserShield;
      break;
    case "Seed":
      img = faSeedling;
      break;
    case "Sun":
      img = faSun;
      break;
    case "Med":
      img = faStethoscope;
      break;
    case "Rain":
      img = faCloudShowersHeavy;
      break;
    case "Search":
      img = faSearch;
      break;
    case "Star":
      img = faStar;
      break;
    case "Tree":
      img = faTree;
      break;
    case "Tools":
      img = faTools;
      break;
    case "Toxic":
      img = faRadiation;
      break;
    case "Tri":
      img = faExclamationTriangle;
      break;
    case "Tub":
      img = faHotTub;
      break;
    case "User":
      img = faUser;
      break;
    case "UserCircle":
      img = faStreetView;
      break;
    case "Volume":
      img = faVolumeUp;
      break;
    default:
      img = faPlayCircle;
  }

  return (
    <>
      <Link to={props.link} videoTitle={props.videoTitle}>
        <FontAwesomeIcon icon={img} className="QuizMenu_Animation" />
        <div>{props.txt}</div>
      </Link>
    </>
  );
}

export default MenuItem;
