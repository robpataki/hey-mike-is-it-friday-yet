"use client";
import { useRef, useState } from "react";

import { AsciiArtFrame } from "@/components/AsciiArtFrame/AsciiArtFrame";
import { Answer } from "@/components/Answer/Answer";
import styles from "./ArtGallery.module.css";
import { Artwork } from "@/shared/constants";
import { FunkyToggleButton } from "../FunkyToggleButton/FunkyToggleButton";

type ArtGalleryProps = {
  outcomeText: string;
  todaysArtworks: Artwork[];
  isItFriday: boolean;
};

export const ArtGallery = (props: ArtGalleryProps) => {
  const { outcomeText, todaysArtworks, isItFriday } = props;
  const [todaysArtwork, setTodaysArtwork] = useState<Artwork | undefined>();
  const artworkIndex = useRef(0);
  const [isFunkyModeOn, setIsFunkyModeOn] = useState(false);

  const rotateArtwork = () => {
    artworkIndex.current =
      artworkIndex.current < todaysArtworks.length - 1
        ? artworkIndex.current + 1
        : 0;
    setTodaysArtwork(todaysArtworks[artworkIndex.current]);
  };

  if (!todaysArtwork) {
    setTodaysArtwork(todaysArtworks[artworkIndex.current]);
  }

  const handleFunkyToggleClick = (isFunky: boolean) => {
    setIsFunkyModeOn(isFunky);
  };

  const wrapperClassName = `${styles.wrapper} ${
    isFunkyModeOn ? styles.wrapperIsFunky : ""
  }`;

  return (
    <div className={wrapperClassName}>
      <h1 className="sr-only">Hey Mike, is it Friday yet?</h1>

      <Answer isPositive={isItFriday} text={outcomeText} />
      {todaysArtwork ? (
        <AsciiArtFrame
          asciiArt={todaysArtwork?.photo}
          onClick={rotateArtwork}
          isFunkyModeOn={isFunkyModeOn}
        />
      ) : null}
      <FunkyToggleButton
        onToggleFunkyMode={handleFunkyToggleClick}
      ></FunkyToggleButton>
    </div>
  );
};
