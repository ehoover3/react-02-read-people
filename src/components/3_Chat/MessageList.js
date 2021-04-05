import React, { useEffect } from "react";
import { useStore, STORE_GET_USER_MESSAGES } from "../../store/store";
import {
  fetch_getUserMessages,
  fetch_getAllMessages,
} from "../../fetchRequests";
import Message from "./Message";

export function UserMessages(props) {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const userMessages = useStore((state) => state.messages);

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

  return (
    <div>
      <span>
        <button onClick={getAllMessages}>All Messages </button>

        <button onClick={getUserMessages}> User Messages</button>
      </span>

      <section className="getAllUserMessages">
        <ul className="user-message-list">
          {userMessages.messages &&
            userMessages.messages.map((message) => (
              <Message
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
