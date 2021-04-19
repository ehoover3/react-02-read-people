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
  let icon = "";
  switch (props.icon) {
    case "Arrows":
      icon = faPeopleArrows;
      break;
    case "Art":
      icon = faPalette;
      break;
    case "Balance":
      icon = faBalanceScale;
      break;
    case "Battery":
      icon = faBatteryFull;
      break;
    case "Bird":
      icon = faCrow;
      break;
    case "Book":
      icon = faBook;
      break;
    case "BookOpen":
      icon = faBookOpen;
      break;
    case "Brain":
      icon = faBrain;
      break;
    case "Bug":
      icon = faBug;
      break;
    case "Bulb":
      icon = faLightbulb;
      break;
    case "Cat":
      icon = faCat;
      break;
    case "Clock":
      icon = faClock;
      break;
    case "Cloudy":
      icon = faCloudSun;
      break;
    case "Dog":
      icon = faDog;
      break;
    case "Eye":
      icon = faEye;
      break;
    case "Fire":
      icon = faFire;
      break;
    case "Fish":
      icon = faFish;
      break;
    case "Frog":
      icon = faFrog;
      break;
    case "HandHeart":
      icon = faHandHoldingHeart;
      break;
    case "Habit":
      icon = faRecycle;
      break;
    case "Heart":
      icon = faHeart;
      break;
    case "Hike":
      icon = faHiking;
      break;
    case "Horse":
      icon = faHorse;
      break;
    case "Key":
      icon = faKey;
      break;
    case "Leaf":
      icon = faLeaf;
      break;
    case "Map":
      icon = faMapSigns;
      break;
    case "Rest":
      icon = faRestroom;
      break;
    case "Run":
      icon = faRunning;
      break;
    case "Shield":
      icon = faUserShield;
      break;
    case "Seed":
      icon = faSeedling;
      break;
    case "Sun":
      icon = faSun;
      break;
    case "Med":
      icon = faStethoscope;
      break;
    case "Rain":
      icon = faCloudShowersHeavy;
      break;
    case "Search":
      icon = faSearch;
      break;
    case "Star":
      icon = faStar;
      break;
    case "Tree":
      icon = faTree;
      break;
    case "Tools":
      icon = faTools;
      break;
    case "Toxic":
      icon = faRadiation;
      break;
    case "Tri":
      icon = faExclamationTriangle;
      break;
    case "Tub":
      icon = faHotTub;
      break;
    case "User":
      icon = faUser;
      break;
    case "UserCircle":
      icon = faStreetView;
      break;
    case "Volume":
      icon = faVolumeUp;
      break;
    default:
      icon = faPlayCircle;
  }

  return (
    <>
      <Link to={props.link} videoTitle={props.videoTitle}>
        <FontAwesomeIcon icon={icon} className="QuizMenu_Animation" />
        <div>{props.menuText}</div>
      </Link>
    </>
  );
}

export default MenuItem;
