import React, { useState, useEffect } from "react";
import { STORE_GET_ALL_MESSAGES, useStore } from "../../store/store";
import { fetch_getAllMessages } from "../../fetchRequests";
import Message2 from "./Message2";
import { Accordion, Button, Card } from "react-bootstrap";

function TopLikedMessages() {
  const dispatch = useStore((state) => state.dispatch);
  const messages = useStore((state) => state.messages);
  const [formData, setFormData] = useState({
    messageText: "",
  });

  function getTopLikedMessages() {
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
    getTopLikedMessages();
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
                  <Message2
                    likes={message.likes.length}
                    key={message.id}
                    messageId={message.id}
                    text={message.text}
                    username={message.username}
                    createdAt={message.createdAt}
                    id={message.id}
                    likeArray={message.likes}
                    getTopLikedMessages={getTopLikedMessages}
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
