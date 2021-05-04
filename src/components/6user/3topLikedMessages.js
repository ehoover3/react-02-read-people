import React, { useEffect } from "react";
import { STORE_GET_TOP_LIKED_MESSAGES, useStore } from "../../store/store";
import { fetch_getAllMessages } from "../../fetchRequests";
import Message from "../4talk/3message";
import { Accordion, Button, Card } from "react-bootstrap";

function TopLikedMessages() {
  const dispatch = useStore((state) => state.dispatch);
  const topLikedMessages = useStore((state) => state.topLikedMessages);

  function getTopLikedMessages() {
    fetch_getAllMessages().then((messageList) => {
      messageList
        .sort((a, b) => b.like.length - a.like.length)
        .splice(10, messageList);

      dispatch({
        type: STORE_GET_TOP_LIKED_MESSAGES,
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
              {topLikedMessages &&
                topLikedMessages.map((message) => (
                  <Message
                    likes={message.like.length}
                    key={message.id}
                    messageId={message.id}
                    text={message.text}
                    username={message.username}
                    createdAt={message.createdAt}
                    id={message._id}
                    likeArray={message.like}
                    getMessages={getTopLikedMessages}
                    Message_Return={"TopLikedMessages"}
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
