"use client";

import styles from "./AsciiArtFrame.module.css";

type AsciiArtFrameProps = {
  asciiArt: string;
  onClick: () => void;
};

export const AsciiArtFrame = (props: AsciiArtFrameProps) => {
  const { asciiArt, onClick } = props;
  return (
    <button className={styles.artworkWrapper} onClick={onClick}>
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
