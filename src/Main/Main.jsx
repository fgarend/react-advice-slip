import React from "react";

function Main({ slip }) {
  return (
    <main>
      <blockquote cite={`https://api.adviceslip.com/advice/${slip.id}`}>{slip.advice}</blockquote>
    </main>
  );
}

export default Main;
