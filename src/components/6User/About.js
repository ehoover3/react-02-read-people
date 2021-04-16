import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useStore } from "../../store/store";
import { fetch_getUser, fetch_updateUser } from "../../fetchRequests";

function About(props) {
  const authUser = useStore((state) => state.user);
  const [myUser, setMyUser] = useState({});
  const [about, setAbout] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch_getUser(authUser.username).then((data) => {
      setMyUser(data.user);
      setAbout(data.user.about);
      setDisplayName(data.user.displayName);
    });
  }, [props.match, count]);

  function handleSubmit(e) {
    e.preventDefault();
    const newUserInfo = {
      about,
      displayName,
    };
    fetch_updateUser(authUser.token, myUser.username, newUserInfo).then(
      (data) => {
        setMyUser(data.user);
      }
    );
  }

  return (
    <Container>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Display Name: {myUser.displayName}</Form.Label>
        <Form.Control
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
          type="text"
          placeholder="my real name"
        />
      </Form.Group>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>About: {myUser.about}</Form.Label>
          <Form.Control
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            type="text"
            placeholder="About me..."
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default About;
