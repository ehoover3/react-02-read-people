import React from "react";
import { useState, useEffect } from "react";
import { fetch_getUsersNames } from "../../fetchRequests.js";
import { Accordion, Button, Card } from "react-bootstrap";

function AllUsersNames(props) {
  const [users, setUsers] = useState([]);

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
            All Users Names
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            {users.map((user) => {
              return <p>{user.username}</p>;
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default AllUsersNames;
