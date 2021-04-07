import React, { useEffect } from "react";
import {
  useStore,
  STORE_GET_USER_MESSAGES,
  STORE_FLIP_HIDE_CREATE_MESSAGE,
} from "../../store/store";
import {
  fetch_getUserMessages,
  fetch_getAllMessages,
} from "../../fetchRequests";
import Message1 from "./Message1";
import { Button, Nav } from "react-bootstrap";

export function UserMessages(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const userMessages = useStore((state) => state.messages);
  const booleanHideCreateMessage = useStore(
    (state) => state.booleanHideCreateMessage
  );

  useEffect(() => {
    fetch_getUserMessages(user.username).then((messageList) => {
      dispatch({ type: STORE_GET_USER_MESSAGES, payload: messageList });
    });
  }, []);

  function getAllMessages() {
    fetch_getAllMessages(user.username).then((messageList) => {
      dispatch({ type: STORE_GET_USER_MESSAGES, payload: messageList });
    });
  }

  function getUserMessages() {
    fetch_getUserMessages(user.username).then((messageList) => {
      dispatch({ type: STORE_GET_USER_MESSAGES, payload: messageList });
    });
  }

  function getDirectMessages() {}
  function getChatroom1Messages() {}
  function getChatroom2Messages() {}
  function getChatroom3Messages() {}

  return (
    <div>
      <div className="MessageList_FlexBox">
        <div></div>
        <Nav variant="pills" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="0" onSelect={getAllMessages}>
              ALL
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1" onSelect={getUserMessages}>
              USER
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="2">DM's</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3">CHATROOM 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="4">CHATROOM 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5">CHATROOM 3</Nav.Link>
          </Nav.Item>
        </Nav>

        <Button
          variant="success"
          type="submit"
          onClick={() => {
            dispatch({
              type: STORE_FLIP_HIDE_CREATE_MESSAGE,
              payload: !booleanHideCreateMessage,
            });
          }}
        >
          CREATE MESSAGE
        </Button>
      </div>

      <section className="getAllUserMessages">
        <ul className="MessageList_List">
          {userMessages.messages &&
            userMessages.messages.map((message) => (
              <Message1
                likes={message.likes.length}
                key={message.id}
                text={message.text}
                username={message.username}
                createdAt={message.createdAt}
                id={message.id}
                likeArray={message.likes}
                getAllOfMessages={getUserMessages}
              />
            ))}
        </ul>
      </section>
    </div>
  );
}

export default UserMessages;
