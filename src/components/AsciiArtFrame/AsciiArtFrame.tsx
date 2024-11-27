import styles from "./AsciiArtFrame.module.css";

type AsciiArtFrameProps = { asciiArt: string };

export const AsciiArtFrame = (props: AsciiArtFrameProps) => {
  const { asciiArt } = props;
  return (
    <div className={styles.artworkWrapper} aria-hidden="true">
      <pre className={styles.artwork}>{asciiArt}</pre>
    </div>
  );
};

export default AsciiArtFrame;
