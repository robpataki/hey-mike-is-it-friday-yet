import { useEffect, useRef, useState } from "react";

import styles from "./ToggleButton.module.css";

type FunkyToggleButtonProps = {
  onToggleFunkyMode: (isFunkyModeOn: boolean) => void;
  isToggledByDefault?: boolean;
};

export const FunkyToggleButton = (props: FunkyToggleButtonProps) => {
  const { onToggleFunkyMode, isToggledByDefault = false } = props;
  const isFirstToggle = useRef<boolean>(true);

  const [isFunkyModeOn, setIsFunkyModeOn] = useState(false);
  const handleClick = () => {
    setIsFunkyModeOn(!isFunkyModeOn);
  };

  useEffect(() => {
    if (!isFirstToggle.current) {
      onToggleFunkyMode(isFunkyModeOn);
    } else {
      isFirstToggle.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFunkyModeOn]);

  useEffect(() => {
    if (isToggledByDefault) {
      setIsFunkyModeOn(isToggledByDefault);
    }
  }, [isToggledByDefault]);

  const wrapperClassName = `${styles.wrapper} ${
    isFunkyModeOn ? styles.wrapperIsToggled : ""
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
