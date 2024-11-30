import { useEffect, useState } from "react";

import styles from "./ToggleButton.module.css";

type FunkyToggleButtonProps = {
  onToggleFunkyMode: (isFunkyModeOn: boolean) => void;
};

export const FunkyToggleButton = (props: FunkyToggleButtonProps) => {
  const { onToggleFunkyMode } = props;

  const [isFunkyModeOn, setIsFunkyModeOn] = useState(false);
  const handleClick = () => {
    setIsFunkyModeOn(!isFunkyModeOn);
  };

  useEffect(() => {
    onToggleFunkyMode(isFunkyModeOn);
  }, [onToggleFunkyMode, isFunkyModeOn]);

  const wrapperClassName = `${styles.wrapper} ${
    isFunkyModeOn && styles.wrapperIsToggled
  }`;

  return (
    <div className={wrapperClassName}>
      <button
        onClick={handleClick}
        className={styles.button}
        aria-pressed={isFunkyModeOn}
      >
        <span className="sr-only">
          Funky mode {isFunkyModeOn ? "ON" : "NO"}
        </span>
        <span className={styles.bubble}></span>
      </button>
    </div>
  );
};

export default FunkyToggleButton;
