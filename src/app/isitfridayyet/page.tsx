"use client";

import AsciiArtFrame from "@/components/AsciiArtFrame/AsciiArtFrame";
import { data } from "../../data/data";
import { Outcome } from "@/components/Outcome/Outcome";
import { useState } from "react";

type Artwork = { photo: string; id: string };

export default function IsItFriday() {
  const [todaysArtwork, setTodaysArtwork] = useState<Artwork | undefined>();
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

  // Shuffle the artworks
  const mixedArtworks = [...artworks].sort(() => Math.random() - 0.5);

  // Pick today's artwork
  const findTodaysArtwork = () =>
    isItFriday
      ? mixedArtworks.find((artwork) => artwork.id === "friday")
      : mixedArtworks.find((artwork) => artwork.id !== "friday");
  const outcomeText = isItFriday ? "YES" : "NO";

  const rotateArtwork = () => {
    setTodaysArtwork(findTodaysArtwork());
  };

  if (!todaysArtwork) {
    setTodaysArtwork(findTodaysArtwork());
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
