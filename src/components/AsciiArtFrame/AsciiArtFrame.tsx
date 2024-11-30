"use client";

import { useCallback, useEffect, useRef } from "react";
import styles from "./AsciiArtFrame.module.css";

type AsciiArtFrameProps = {
  asciiArt: string;
  onClick: () => void;
  isFunkyModeOn: boolean;
};

export const AsciiArtFrame = (props: AsciiArtFrameProps) => {
  const { asciiArt, onClick, isFunkyModeOn } = props;

  const wrapperRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const pointerPoint = { x: event.clientX, y: event.clientY };
      const centerPoint = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };
      const offsetPoint = { x: 0, y: 0 };

      offsetPoint.x =
        pointerPoint.x < centerPoint.x
          ? (offsetPoint.x = -1 * (centerPoint.x - pointerPoint.x))
          : (offsetPoint.x = pointerPoint.x - centerPoint.x);

      offsetPoint.y =
        pointerPoint.y < centerPoint.y
          ? (offsetPoint.y = -1 * (centerPoint.y - pointerPoint.y))
          : (offsetPoint.y = pointerPoint.y - centerPoint.y);

      const transformOffset = {
        x: ((offsetPoint.x / centerPoint.x) * 100).toFixed(2),
        y: ((offsetPoint.y / centerPoint.y) * 100).toFixed(2),
      };

      // Apply the transformation to the element's styling
      if (wrapperRef?.current) {
        if (isFunkyModeOn) {
          wrapperRef?.current.style.setProperty(
            "--bg-transform-x",
            `${transformOffset.x}%`
          );
          wrapperRef?.current.style.setProperty(
            "--bg-transform-y",
            `${transformOffset.y}%`
          );
        } else {
          wrapperRef?.current.style.setProperty("--bg-transform-x", `0%`);
          wrapperRef?.current.style.setProperty("--bg-transform-y", `0%`);
        }
      }
    },
    [isFunkyModeOn]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className={styles.artworkWrapper}>
      <button
        className={styles.artworkFrame}
        onClick={onClick}
        ref={wrapperRef}
      >
        <span className="sr-only">Show new artwork</span>
        <pre
          className={styles.artwork}
          aria-hidden="true"
          suppressHydrationWarning
        >
          {asciiArt}
        </pre>
      </button>
    </div>
  );
};

export default AsciiArtFrame;
