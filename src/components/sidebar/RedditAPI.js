import React, { useState, useEffect } from "react";
import { Accordion, Button, Card } from "react-bootstrap";

// https://github.com/public-apis/public-apis

function RedditAPI() {
  // useEffect(() => {}, []);

  // Add the API fetch request here

  // Add other functions here

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Reddit API
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <section>ADD FUNCTIONS OR TEXT HERE</section>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default RedditAPI;
