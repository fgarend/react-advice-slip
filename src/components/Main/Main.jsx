import React from "react";

import useAdviceSlip from "../../hooks/useAdviceSlip";
import ExternalLink from "../ExternalLink";

function Main() {
  const slip = useAdviceSlip();

  return (
    <main>
      <figure>
        <blockquote cite={`https://api.adviceslip.com/advice/${slip.id}`}>{slip.advice}</blockquote>
        <figcaption>
          advice powered by <ExternalLink href="https://api.adviceslip.com/">Advice Slip JSON API</ExternalLink>
        </figcaption>
      </figure>
    </main>
  );
}

export default Main;
