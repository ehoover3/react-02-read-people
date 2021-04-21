import React, { useState, useEffect } from "react";
import { Accordion, Button, Card } from "react-bootstrap";
import "./DogPicsAPI.css";
// https://github.com/public-apis/public-apis

function DogPics() {
  const [dogPics, setDogPics] = useState();

  useEffect(() => {
    // Add the API fetch request here
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogPics(data.message);
      });
  }, []);
  // Add other functions here

  function newDog(event){
    console.log(event);
    if(event.altKey === false){
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogPics(data.message);
      });
  }
    }

  useEffect(()=>{
    window.addEventListener('click', newDog )
    return () => {
      window.removeEventListener('click', newDog )
    }
  }, []);

  return (
    <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Guess The Emotion  
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <section>
              <div>
                <img src={dogPics} className="DogPics_img"/>
                <Button onClick={newDog} variant="primary">New Furry Friend</Button>{' '}
              </div>
            </section>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
  }
export default DogPics;