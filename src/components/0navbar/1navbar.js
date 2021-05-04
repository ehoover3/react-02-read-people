import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Chat,
  PersonCircle,
  PlayCircle,
  Star,
  Tree,
} from "react-bootstrap-icons";
import { fetch_getUser } from "../../fetchRequests";
import { Nav } from "react-bootstrap";
import { useStore } from "../../store/store";

function Navigation() {
  const count = useStore((state) => state.count);
  const authUser = useStore((state) => state.user);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    fetch_getUser(authUser.username).then((data) => {
      setDisplayName(data.username.toUpperCase());
    });
  }, [authUser.username]);

  return (
    <>
      <div className="Nav_Bar">
        <Nav
          variant="pills"
          className="justify-content-center"
          defaultActiveKey="0"
        >
          <div className="Nav_Flex">
            <div className="App_Fifteen_vw"></div>
            <div className="Nav_FlexLeft">
              <Nav.Item>
                <Nav.Link eventKey="0" as={Link} to="/Grow">
                  <Tree /> GROW
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="1" as={Link} to="/Talk">
                  <Chat /> TALK
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to="/Play">
                  <PlayCircle /> PLAY
                </Nav.Link>
              </Nav.Item>
            </div>
            <div className="Nav_FlexRight">
              <Nav.Item>
                <Nav.Link eventKey="5" disabled>
                  <Star /> {count}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="4" as={Link} to="/User">
                  <PersonCircle /> {displayName}
                </Nav.Link>
              </Nav.Item>
            </div>
            <div className="App_Fifteen_vw"></div>
          </div>
        </Nav>
      </div>

      <div className="Nav_SpaceVertical"></div>
    </>
  );
}

export default Navigation;
