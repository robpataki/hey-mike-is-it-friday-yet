import { useEffect, useRef, useState } from "react";

import styles from "./ToggleButton.module.css";

type ToggleButtonProps = {
  /**
   * Event callback to handle toggle state changes
   */
  onChange?: (isToggled: boolean) => void;
  /**
   * Turn on funky mode on initial render
   */
  isToggledByDefault?: boolean;
};

/**
 * A basic toggle button with smooth animation and easy to customise colour theming options.
 * @param props ToggleButtonProps
 * @returns
 */
export const ToggleButton = (props: ToggleButtonProps) => {
  const { onChange, isToggledByDefault = false } = props;
  const isFirstToggle = useRef<boolean>(true);

  const [isToggled, setIsToggled] = useState(false);
  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (!isFirstToggle.current) {
      if (onChange) {
        onChange(isToggled);
      }
    } else {
      isFirstToggle.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isToggled]);

  useEffect(() => {
    if (isToggledByDefault) {
      setIsToggled(isToggledByDefault);
    }
  }, [isToggledByDefault]);

  const wrapperClassName = `${styles.wrapper} ${
    isToggled ? styles.wrapperIsToggled : ""
  }`;

  return (
    <div className={wrapperClassName} aria-live="polite" aria-atomic="true">
      <button
        onClick={handleClick}
        className={styles.button}
        aria-pressed={isToggled}
      >
        <span className="sr-only">Funky mode {isToggled ? "ON" : "NO"}</span>
        <span className={styles.bubble}></span>
      </button>
    </div>
  );
};

export default ToggleButton;
