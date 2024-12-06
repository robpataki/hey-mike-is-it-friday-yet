import styles from "./Answer.module.css";

type AnswerProps = {
  /**
   * The Best used for single words, in our case we use it to display YES or NO.
   */
  text: string;
  /**
   * When true green colour text is used. When false, red colour text is used.
   */
  isPositive?: boolean;
};

/**
 * Display a message with bold block letters and green/red colour.
 */
export const Answer = (props: AnswerProps) => {
  const { text, isPositive } = props;
  const className = `${styles.answer} ${isPositive ? styles.answerYes : ""}`;
  const contents = [];
  for (let i = 0; i < 9; i++) {
    contents.push(
      <span key={`text-${i}`}>
        {text}
        <br />
      </span>
    );
  }

  return <p className={className}>{contents}</p>;
};
