import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  useStore,
  STORE_GET_ALL_MESSAGES,
  STORE_GET_USER_MESSAGES,
  STORE_TOGGLE_NEW_MESSAGE,
} from "../../store/store";

import {
  fetch_getUserMessages,
  fetch_getAllMessages,
} from "../../fetchRequests";
import Message from "./3message";

export function ListMessages(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const userMessages = useStore((state) => state.messages);
  const toggleNewMessage = useStore((state) => state.toggleNewMessage);

  useEffect(() => {
    fetch_getAllMessages().then((messageList) => {
      dispatch({ type: STORE_GET_ALL_MESSAGES, payload: messageList });
    });
  }, [toggleNewMessage]);

  function getAllMessages() {
    fetch_getAllMessages().then((messageList) => {
      dispatch({ type: STORE_GET_ALL_MESSAGES, payload: messageList });
    });
  }
  function getUserMessages() {
    fetch_getUserMessages(user.username).then((messageList) => {
      dispatch({ type: STORE_GET_USER_MESSAGES, payload: messageList });
    });
  }

  return (
    <>
      <section className="MessageList_NavigationBar">
        <div className="MessageList_DropDown"></div>

        <Button
          variant="success"
          type="submit"
          onClick={() => {
            dispatch({
              type: STORE_TOGGLE_NEW_MESSAGE,
              payload: !toggleNewMessage,
            });
          }}
        >
          CREATE MESSAGE
        </Button>
      </section>

      <section>
        {userMessages &&
          userMessages
            .map((message) => (
              <Message
                likes={message.like.length}
                key={message._id}
                text={message.text}
                username={message.username}
                createdAt={message.createdAt}
                id={message._id}
                likeArray={message.like}
                getMessages={getAllMessages}
                Message_Return={"MessageList"}
              />
            ))
            .reverse()}
      </section>
    </>
  );
}

export default ListMessages;
