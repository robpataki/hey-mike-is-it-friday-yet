import { useEffect, useRef, useState } from "react";

import styles from "./FunkyToggleButton.module.css";
import { ToggleButton } from "@/components/ToggleButton/ToggleButton";

type FunkyToggleButtonProps = {
  /**
   * Event callback to handle when funky mode changes
   */
  onToggleFunkyMode?: (isFunkyModeOn: boolean) => void;
  /**
   * Turn on funky mode on initial render
   * @default false
   */
  isToggledByDefault?: boolean;
};

/**
 * The Funky Toggle Button uses the Toggle Button with a colour scheme that matches the Answer over the artwork. The toggle is positioned in the bottom right corner of the screen over the artwork.
 * @returns
 */
export const FunkyToggleButton = (props: FunkyToggleButtonProps) => {
  const { onToggleFunkyMode, isToggledByDefault = false } = props;
  const isFirstToggle = useRef<boolean>(true);

  const [isFunkyModeOn, setIsFunkyModeOn] = useState(false);
  const handleToggleChange = () => {
    setIsFunkyModeOn(!isFunkyModeOn);
  };

  useEffect(() => {
    if (!isFirstToggle.current) {
      if (onToggleFunkyMode) {
        onToggleFunkyMode(isFunkyModeOn);
      }
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
      <ToggleButton
        label="Funky mode"
        onChange={handleToggleChange}
        isToggledByDefault={isToggledByDefault}
      />
    </div>
  );
};
