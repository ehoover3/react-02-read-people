import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/store";
import {
  Chat,
  Gem,
  HouseFill,
  PersonCircle,
  PlayCircle,
  List,
  Stars,
} from "react-bootstrap-icons";
import { fetch_getUser } from "../../fetchRequests";
import { Button, Nav } from "react-bootstrap";

function Navigation(props) {
  const gems = useStore((state) => state.gems);
  const authUser = useStore((state) => state.user);
  const [myUser, setMyUser] = useState({});
  const [about, setAbout] = useState("");
  const [displayName, setDisplayName] = useState("");

  console.log(authUser);

  useEffect(() => {
    fetch_getUser(authUser.username).then((data) => {
      setMyUser(data.user);
      setAbout(data.user.about);
      setDisplayName(data.user.displayName);
    });
  }, []);

  return (
    <>
      <div className="Nav_Bar">
        <Nav
          variant="pills"
          className="justify-content-center"
          defaultActiveKey="0"
        >
          <div className="Nav_Flex">
            <div className="Nav_FlexLeft">
              <Nav.Item>
                <Nav.Link eventKey="0" as={Link} to="/Home">
                  <HouseFill /> LIFE SKILLS
                </Nav.Link>
              </Nav.Item>
            </div>
            <div className="Nav_FlexCenter">
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/Learn">
                  <Stars /> LEARN
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to="/Chat">
                  <Chat /> CHAT
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" as={Link} to="/Play">
                  <PlayCircle /> PLAY
                </Nav.Link>
              </Nav.Item>
            </div>
            {/* RIGHT SIDE */}
            <div className="Nav_FlexRight">
              <Nav.Item>
                <Nav.Link eventKey="4" as={Link} to="/User">
                  <PersonCircle /> {displayName}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="5" disabled>
                  <Gem /> {gems}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                {/* <Button variant="outline-primary" id="Nav_Button"> */}
                <List className="Nav_ListIcon" />
                {/* </Button> */}
              </Nav.Item>
              <div> </div>
            </div>
          </div>
        </Nav>
      </div>

      <div className="Nav_SpaceVertical"></div>
    </>
  );
}

export default Navigation;
