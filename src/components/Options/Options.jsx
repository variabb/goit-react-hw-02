// import Feedback from "../Feedback/Feedback";
// import s from "./Options.module.css";
// import { useState } from "react";

function Options({ updateFeedback, total, reset }) {
  // console.log(feedback);
  
  return (
    <>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {total > 0 ? <button onClick={() => reset()}>Reset</button> : null}
    </>
  );
}

export default Options;
