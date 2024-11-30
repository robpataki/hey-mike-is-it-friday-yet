"use client";

import { useEffect, useRef } from "react";
import styles from "./AsciiArtFrame.module.css";

type AsciiArtFrameProps = {
  asciiArt: string;
  onClick: () => void;
};

export const AsciiArtFrame = (props: AsciiArtFrameProps) => {
  const { asciiArt, onClick } = props;

  const wrapperRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
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
        wrapperRef?.current.style.setProperty(
          "--bg-transform-x",
          `${transformOffset.x}%`
        );
        wrapperRef?.current.style.setProperty(
          "--bg-transform-y",
          `${transformOffset.y}%`
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <button
      className={styles.artworkWrapper}
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
  );
};

export default AsciiArtFrame;
