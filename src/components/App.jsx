import { useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  const updateFeedback = (feedbackType) => {
       setFeedback((prevFeedback) => ({
         ...prevFeedback,
         [feedbackType]: prevFeedback[feedbackType] + 1,
       }));
  };
   const resetFeedback = () => {
     setFeedback({
       good: 0,
       neutral: 0,
       bad: 0,
     });
   };
  console.log(feedback);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
        feedback={feedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
