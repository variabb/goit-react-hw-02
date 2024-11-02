
import s from "./Options.module.css";


function Options({ updateFeedback, total, reset }) {

  
  return (
    <div className={s.buttonContainer}>
      <button className={s.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={s.button} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={s.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total > 0 ? (
        <button className={s.button} onClick={() => reset()}>
          Reset
        </button>
      ) : null}
    </div>
  );
}

export default Options;
