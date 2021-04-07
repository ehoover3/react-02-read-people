import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/store";
import {
  Chat,
  Gem,
  HouseFill,
  PersonCircle,
  Stars,
} from "react-bootstrap-icons";
import { fetch_getUser } from "../fetchRequests";
import { Nav } from "react-bootstrap";

function Navigation(props) {
  let clicked;
  let blue7 = "rgb(24, 153, 214)";

  const crowns = useStore((state) => state.crowns);
  const streak = useStore((state) => state.streak);
  const gems = useStore((state) => state.gems);
  const authUser = useStore((state) => state.user);
  const [count, setCount] = useState(0);
  const [myUser, setMyUser] = useState({});
  const [about, setAbout] = useState("");
  const [displayName, setDisplayName] = useState("");
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  console.log(authUser);
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  useEffect(() => {
    fetch_getUser(authUser.username).then((data) => {
      setMyUser(data.user);
      setAbout(data.user.about);
      setDisplayName(data.user.displayName);
    });
  }, [props.match, count]);

  useEffect(() => {
    clicked = "Home";
    document.querySelector(".Nav_Home").style.color = blue7;
    document.querySelector(".Nav_Learn").style.color = "grey";
    document.querySelector(".Nav_Chat").style.color = "grey";
  }, []);

  function onClick1() {
    clicked = "Home";
    document.querySelector(".Nav_Home").style.color = blue7;
    document.querySelector(".Nav_Learn").style.color = "grey";
    document.querySelector(".Nav_Chat").style.color = "grey";
  }
  function onClick2() {
    clicked = "Learn";
    document.querySelector(".Nav_Home").style.color = "grey";
    document.querySelector(".Nav_Learn").style.color = blue7;
    document.querySelector(".Nav_Chat").style.color = "grey";
  }
  function onClick3() {
    clicked = "Chat";
    document.querySelector(".Nav_Home").style.color = "grey";
    document.querySelector(".Nav_Learn").style.color = "grey";
    document.querySelector(".Nav_Chat").style.color = blue7;
  }

  function onMouseOver1() {
    document.querySelector(".Nav_Home").style.color = blue7;
  }
  function onMouseOver2() {
    document.querySelector(".Nav_Learn").style.color = blue7;
  }
  function onMouseOver3() {
    document.querySelector(".Nav_Chat").style.color = blue7;
  }

  function onMouseOut1() {
    if (clicked === "Home") {
      document.querySelector(".Nav_Home").style.color = blue7;
    } else {
      document.querySelector(".Nav_Home").style.color = "grey";
    }
  }
  function onMouseOut2() {
    if (clicked === "Learn") {
      document.querySelector(".Nav_Learn").style.color = blue7;
    } else {
      document.querySelector(".Nav_Learn").style.color = "grey";
    }
  }
  function onMouseOut3() {
    if (clicked === "Chat") {
      document.querySelector(".Nav_Chat").style.color = blue7;
    } else {
      document.querySelector(".Nav_Chat").style.color = "grey";
    }
  }

  {
    /* <!-- ///////////////////////////////////////////
    https://material-ui.com/components/tabs/
    Pay attention to TabPanel and ally Props functions. 
    Do same things with less lines of code.
    //////////////////////////////////////////// --> */
  }

  return (
    <div>
      <div className="Nav_Bar">
        {/* LEFT SIDE */}
        <div className="Nav_Bar_LeftSide">
          <div className="Nav_Space2"></div>

          <Link
            to="/Home"
            onClick={onClick1}
            className="Nav_Home"
            onMouseOver={onMouseOver1}
            onMouseOut={onMouseOut1}
          >
            <HouseFill className="Nav_Home" /> HOME
          </Link>
          <div className="Nav_Space1"></div>

          <Link
            to="/Learn"
            onClick={onClick2}
            className="Nav_Learn"
            onMouseOver={onMouseOver2}
            onMouseOut={onMouseOut2}
          >
            <Stars className="Nav_Learn" /> LEARN
          </Link>
          <div className="Nav_Space1"></div>
          <Link
            to="/Chat"
            onClick={onClick3}
            className="Nav_Chat"
            onMouseOver={onMouseOver3}
            onMouseOut={onMouseOut3}
          >
            <Chat className="Nav_Chat" /> CHAT
          </Link>
        </div>
        {/* RIGHT SIDE */}
        <div className="Nav_Bar_RightSide">
          <div className="Nav_User">
            <PersonCircle className="Nav_User" /> {displayName}
            <div className="Nav_User_Dropdown">
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
          </div>

          <div className="Nav_Space2"></div>

          <div className="Nav_Gems">
            <Gem className="Nav_Gems" />
            {gems}
          </div>

          <div className="Nav_Space2"></div>
        </div>
      </div>
      <div className="Nav_SpaceVertical"></div>
    </div>
  );
}

export default Navigation;
