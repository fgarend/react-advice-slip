import React from "react";

function Main({ slip }) {
  return (
    <main>
      <figure>
        <blockquote cite={`https://api.adviceslip.com/advice/${slip.id}`}>{slip.advice}</blockquote>
      </figure>
    </main>
  );
}

export default Main;
