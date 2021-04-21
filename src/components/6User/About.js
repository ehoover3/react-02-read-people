import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useStore, STORE_UPDATE_USER } from "../../store/store";
import { fetch_getUser, fetch_updateUser } from "../../fetchRequests";

function About(props) {
  const authUser = useStore((state) => state.user);
  const [myUser, setMyUser] = useState({});
  const [about, setAbout] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [count, setCount] = useState(0);

  const dispatch = useStore((state) => state.dispatch);
  const THISabout = useStore((state) => state.about);

  console.log(THISabout);

  useEffect(() => {
    fetch_getUser(authUser.username).then((data) => {
      setMyUser(data.username);
      setAbout(data.about);
    });
  }, [THISabout]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch_updateUser(authUser.token, authUser.username, about).then((data) => {
      dispatch({
        type: STORE_UPDATE_USER,
        payload: data,
      });
      // //setMyUser(data.user);
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          {/* <Form.Label>About: {authUser.about}</Form.Label> */}
          <Form.Label>About: {authUser.about}</Form.Label>

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
