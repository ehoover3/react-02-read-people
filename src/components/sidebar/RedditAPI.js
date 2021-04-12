import React, { useState, useEffect } from "react";
import Article from "./Article";
import { Accordion, Button, Card } from "react-bootstrap";

// https://github.com/public-apis/public-apis

function RedditAPI() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("body_language");

  // useEffect(() => {}, []);
  useEffect(() => {
    // Add the API fetch request here
    fetch("https://www.reddit.com/r/body_language.json").then((res) => {
      if (res.status != 200) {
        console.log("Error");
        return;
      }
      res.json().then((data) => {
        if (data != null) {
          setArticles(data.data.children);
        }
      });
    });
  }, [subreddit]);
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
            <section>
              <div className="App">
                <header>
                  <input
                    type="text"
                    className="input"
                    value={subreddit}
                    onChange={(e) => setSubreddit(e.target.value)}
                  />
                </header>
                <div className="articles">
                  {articles != null
                    ? articles.map((article, index) => (
                        <Article key={index} article={article.data} />
                      ))
                    : ""}
                </div>
              </div>
            </section>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default RedditAPI;
