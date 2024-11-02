import s from "./Feedback.module.css";

function Feedback({ feedback }) {
  const { good, neutral, bad } = feedback;
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total : {good + neutral + bad}</li>
      </ul>
    </>
  );
}

export default Feedback;
