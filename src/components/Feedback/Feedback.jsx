// import s from "./Feedback.module.css";

function Feedback({ feedback, total, positive }) {
  const { good, neutral, bad } = feedback;
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positive}%</li>
      </ul>
    </>
  );
}

export default Feedback;
