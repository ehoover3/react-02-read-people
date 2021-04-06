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
  let clicked;
  let blue7 = "rgb(24, 153, 214)";

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

  useEffect(() => {
    clicked = "All";
    document.querySelector(".MessageList_All").style.color = blue7;
    document.querySelector(".MessageList_User").style.color = "grey";
  }, []);

  useEffect(() => {});

  // BACKEND: each chatroom is an object with a messages array
  // BACKEND: direct message - USER -> ANOTHER USER object, specific token (authorize these users have these messages), message array
  //
  // Make it into components
  // Refactor into Bootstrap Nav Bar

  function onClick1() {
    getAllMessages(); // calling the api seems to break the coloring of the div
    clicked = "All";
    document.querySelector(".MessageList_All").style.color = blue7;
    document.querySelector(".MessageList_User").style.color = "grey";
    document.querySelector(".MessageList_DMs").style.color = "grey";
    document.querySelector(".MessageList_Chatroom1").style.color = "grey";
    document.querySelector(".MessageList_Chatroom2").style.color = "grey";
    document.querySelector(".MessageList_Chatroom3").style.color = "grey";
  }
  function onClick2() {
    getUserMessages(); // calling the api seems to break the coloring of the div
    clicked = "User";
    document.querySelector(".MessageList_All").style.color = "grey";
    document.querySelector(".MessageList_User").style.color = blue7;
    document.querySelector(".MessageList_DMs").style.color = "grey";
    document.querySelector(".MessageList_Chatroom1").style.color = "grey";
    document.querySelector(".MessageList_Chatroom2").style.color = "grey";
    document.querySelector(".MessageList_Chatroom3").style.color = "grey";
  }
  function onClick3() {
    clicked = "DMs";
    document.querySelector(".MessageList_All").style.color = "grey";
    document.querySelector(".MessageList_User").style.color = "grey";
    document.querySelector(".MessageList_DMs").style.color = blue7;
    document.querySelector(".MessageList_Chatroom1").style.color = "grey";
    document.querySelector(".MessageList_Chatroom2").style.color = "grey";
    document.querySelector(".MessageList_Chatroom3").style.color = "grey";
  }
  function onClick4() {
    clicked = "Chatroom1";
    document.querySelector(".MessageList_All").style.color = "grey";
    document.querySelector(".MessageList_User").style.color = "grey";
    document.querySelector(".MessageList_DMs").style.color = "grey";
    document.querySelector(".MessageList_Chatroom1").style.color = blue7;
    document.querySelector(".MessageList_Chatroom2").style.color = "grey";
    document.querySelector(".MessageList_Chatroom3").style.color = "grey";
  }
  function onClick5() {
    clicked = "Chatroom2";
    document.querySelector(".MessageList_All").style.color = "grey";
    document.querySelector(".MessageList_User").style.color = "grey";
    document.querySelector(".MessageList_DMs").style.color = "grey";
    document.querySelector(".MessageList_Chatroom1").style.color = "grey";
    document.querySelector(".MessageList_Chatroom2").style.color = blue7;
    document.querySelector(".MessageList_Chatroom3").style.color = "grey";
  }
  function onClick6() {
    clicked = "Chatroom3";
    document.querySelector(".MessageList_All").style.color = "grey";
    document.querySelector(".MessageList_User").style.color = "grey";
    document.querySelector(".MessageList_DMs").style.color = "grey";
    document.querySelector(".MessageList_Chatroom1").style.color = "grey";
    document.querySelector(".MessageList_Chatroom2").style.color = "grey";
    document.querySelector(".MessageList_Chatroom3").style.color = blue7;
  }

  function onMouseOver1() {
    document.querySelector(".MessageList_All").style.color = blue7;
  }
  function onMouseOver2() {
    document.querySelector(".MessageList_User").style.color = blue7;
  }
  function onMouseOver3() {
    document.querySelector(".MessageList_DMs").style.color = blue7;
  }
  function onMouseOver4() {
    document.querySelector(".MessageList_Chatroom1").style.color = blue7;
  }
  function onMouseOver5() {
    document.querySelector(".MessageList_Chatroom2").style.color = blue7;
  }
  function onMouseOver6() {
    document.querySelector(".MessageList_Chatroom3").style.color = blue7;
  }

  function onMouseOut1() {
    if (clicked === "All") {
      document.querySelector(".MessageList_All").style.color = blue7;
    } else {
      document.querySelector(".MessageList_All").style.color = "grey";
    }
  }
  function onMouseOut2() {
    if (clicked === "User") {
      document.querySelector(".MessageList_User").style.color = blue7;
    } else {
      document.querySelector(".MessageList_User").style.color = "grey";
    }
  }
  function onMouseOut3() {
    if (clicked === "DMs") {
      document.querySelector(".MessageList_DMs").style.color = blue7;
    } else {
      document.querySelector(".MessageList_DMs").style.color = "grey";
    }
  }
  function onMouseOut4() {
    if (clicked === "Chatroom1") {
      document.querySelector(".MessageList_Chatroom1").style.color = blue7;
    } else {
      document.querySelector(".MessageList_Chatroom1").style.color = "grey";
    }
  }
  function onMouseOut5() {
    if (clicked === "Chatroom2") {
      document.querySelector(".MessageList_Chatroom2").style.color = blue7;
    } else {
      document.querySelector(".MessageList_Chatroom2").style.color = "grey";
    }
  }
  function onMouseOut6() {
    if (clicked === "Chatroom3") {
      document.querySelector(".MessageList_Chatroom3").style.color = blue7;
    } else {
      document.querySelector(".MessageList_Chatroom3").style.color = "grey";
    }
  }

  return (
    <div>
      <div className="MessageList_Flexbox">
        <div
          className="MessageList_All"
          onClick={onClick1}
          onMouseOver={onMouseOver1}
          onMouseOut={onMouseOut1}
        >
          ALL
        </div>
        <div
          className="MessageList_User"
          onClick={onClick2}
          onMouseOver={onMouseOver2}
          onMouseOut={onMouseOut2}
        >
          USER
        </div>
        <div
          className="MessageList_DMs"
          onClick={onClick3}
          onMouseOver={onMouseOver3}
          onMouseOut={onMouseOut3}
        >
          DM's
        </div>
        <div
          className="MessageList_Chatroom1"
          onClick={onClick4}
          onMouseOver={onMouseOver4}
          onMouseOut={onMouseOut4}
        >
          CHATROOM 1
        </div>
        <div
          className="MessageList_Chatroom2"
          onClick={onClick5}
          onMouseOver={onMouseOver5}
          onMouseOut={onMouseOut5}
        >
          CHATROOM 2
        </div>
        <div
          className="MessageList_Chatroom3"
          onClick={onClick6}
          onMouseOver={onMouseOver6}
          onMouseOut={onMouseOut6}
        >
          CHATROOM 3
        </div>
      </div>

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
