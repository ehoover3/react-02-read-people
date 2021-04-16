import React from "react";
import { useState, useEffect } from "react";
import { fetch_getUsersNames } from "../../fetchRequests.js";
import {
  Accordion,
  Button,
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";

function AllUsers(props) {
  const [users, setUsers] = useState([]);

  let REPLACE_THIS_VARIABLE_LATER = true;

  useEffect(() => {
    fetch_getUsersNames().then((data) => {
      setUsers(data.users);
    });
  }, []);

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            All Users
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {users.map((user) => {
              return (
                <>
                  <p className="AllUserNames_FlexBox">
                    {user.username}
                    {REPLACE_THIS_VARIABLE_LATER ? (
                      // IF CURRENTLY NOT A FRIEND, RENDER THIS
                      <OverlayTrigger
                        key={"left"}
                        placement={"left"}
                        overlay={
                          <Tooltip id={`tooltip-left`}>
                            <strong>Add Friend</strong>
                          </Tooltip>
                        }
                      >
                        <PlusCircle />
                      </OverlayTrigger>
                    ) : (
                      // IF CURRENTLY A FRIEND, RENDER THIS
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
                      </OverlayTrigger>
                    )}
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

export default AllUsers;
