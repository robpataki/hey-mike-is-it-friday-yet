"use client";
import { ReactNode, useRef, useState } from "react";

import { data } from "../data/data";
import Layout from "../app/layout";
import AsciiArtFrame from "@/components/AsciiArtFrame/AsciiArtFrame";
import { Outcome } from "@/components/Outcome/Outcome";

type Artwork = { photo: string; id: string };

const isItFriday = new Date().getDay() === 5;

// Gather artwork from the data
const { days: daysData } = data;
const artworks: Artwork[] = [];
daysData.forEach((day) => {
  const { photos } = day;
  photos.forEach((photo) => {
    artworks.push({ photo: photo.text, id: day.id });
  });
});

const outcomeText = isItFriday ? "YES" : "NO";
const mixedArtworks = [...artworks].sort(() => Math.random() - 0.5);
const mixedFridayArtworks = mixedArtworks.filter(
  (artwork) => artwork.id === "friday"
);
const mixedNonFridayArtworks = mixedArtworks.filter(
  (artwork) => artwork.id !== "friday"
);
const todaysArtworks = isItFriday
  ? mixedFridayArtworks
  : mixedNonFridayArtworks;

export default function Page() {
  const [todaysArtwork, setTodaysArtwork] = useState<Artwork | undefined>();
  const artworkIndex = useRef(0);

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

  return (
    <>
      <h1 className="sr-only">Is it Friday yet?</h1>
      <Outcome isPositive={isItFriday}>{outcomeText}</Outcome>
      {todaysArtwork ? (
        <AsciiArtFrame
          asciiArt={todaysArtwork?.photo}
          onClick={rotateArtwork}
        />
      ) : null}
    </>
  );
}

Page.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
