import React from "react";
import { useState, useEffect } from "react";
import { useStore } from "../../store/store";
import { fetch_getFriends } from "../../fetchRequests.js";
import {
  Accordion,
  Button,
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { DashCircle } from "react-bootstrap-icons";

function Friends(props) {
  const authUser = useStore((state) => state.user);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch_getFriends(authUser.username).then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Friends
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {users.map((user) => {
              return (
                <>
                  <p className="AllUserNames_FlexBox">
                    {user}
                    <OverlayTrigger
                      key={"left"}
                      placement={"left"}
                      overlay={
                        <Tooltip id={`tooltip-left`}>
                          <strong>Remove Friend</strong>
                        </Tooltip>
                      }
                    >
                      <DashCircle />
                    </OverlayTrigger>{" "}
                  </p>
                </>
              );
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Friends;
