import React, { useState, useEffect } from "react"; // import react things
import { STORE_GET_ALL_MESSAGES, useStore } from "../../store/store"; // import store // gets message data
import { fetch_getAllMessages } from "../../fetchRequests"; // import fetch requests
import Message from "../3_Chat/Message"; // import components // HTML format
import { Accordion, Button, Card } from "react-bootstrap";

function TopLikedMessages() {
  const dispatch = useStore((state) => state.dispatch);
  const messages = useStore((state) => state.messages);
  const [formData, setFormData] = useState({
    messageText: "",
  });

  function getAllOfMessages() {
    fetch_getAllMessages().then((messageList) => {
      messageList.messages
        .sort((a, b) => b.likes.length - a.likes.length)
        .splice(10, messageList.messages.length);

      dispatch({
        type: STORE_GET_ALL_MESSAGES,
        payload: messageList,
      });
    });
  }

  useEffect(() => {
    getAllOfMessages();
  }, []);

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Top Liked Messages
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <section>
              {/* CONDITIONAL RENDERING: if messages.messages exists, run map function */}
              {messages.messages &&
                messages.messages.map((message) => (
                  <Message
                    likes={message.likes.length}
                    key={message.id}
                    messageId={message.id}
                    text={message.text}
                    username={message.username}
                    createdAt={message.createdAt}
                    id={message.id}
                    likeArray={message.likes}
                    getAllOfMessages={getAllOfMessages}
                  />
                ))}
            </section>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default TopLikedMessages;
