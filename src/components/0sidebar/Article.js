import React from "react";

function Article(props) {
  return (
    <article>
      <a href={"https://reddit.com" + props.article.permalink} target="_blank">
        <h6>{props.article.title}</h6>
      </a>
    </article>
  );
}

export default Article;
