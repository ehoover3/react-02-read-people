import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Chat,
  HouseFill,
  PersonCircle,
  PlayCircle,
  Star,
  Tree,
} from "react-bootstrap-icons";
import { fetch_getUser } from "../../fetchRequests";
import { Nav } from "react-bootstrap";
import {
  useStore,
  STORE_OPEN_SIDEBAR,
  STORE_HAMBURGER_CLICK_AT_LEAST_ONCE,
} from "../../store/store";

function Navigation(props) {
  const gems = useStore((state) => state.gems);
  const authUser = useStore((state) => state.user);
  const [myUser, setMyUser] = useState({});
  const [about, setAbout] = useState("");
  const [displayName, setDisplayName] = useState("");
  const dispatch = useStore((state) => state.dispatch);
  const openSidebar = useStore((state) => state.openSidebar);
  const hambugerClickAtLeastOnce = useStore((state) => state.openSidebar);

  const toggleSidebar = () => {
    dispatch({
      type: STORE_HAMBURGER_CLICK_AT_LEAST_ONCE,
      payload: true,
    });
    dispatch({
      type: STORE_OPEN_SIDEBAR,
      payload: !openSidebar,
    });
  };

  useEffect(() => {
    fetch_getUser(authUser.username).then((data) => {
      setMyUser(data.user);
      setAbout(data.user.about);
      setDisplayName(data.user.displayName.toUpperCase());
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
                  <Tree /> GROW
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" as={Link} to="/Chat">
                  <Chat /> TALK
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
                  <Star /> {gems}
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                {openSidebar ? (
                  <div id="hamburger" className="open" onClick={toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <div id="hamburger" onClick={toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                )}
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
