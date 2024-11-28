"use client";

import AsciiArtFrame from "@/components/AsciiArtFrame/AsciiArtFrame";
import { data } from "../../data/data";
import { Outcome } from "@/components/Outcome/Outcome";

export default function IsItFriday() {
  const todaysDate = new Date();
  const isItFriday = todaysDate.getDay() === 5;

  // Gather artwork from the data
  const { days: daysData } = data;
  const artworks: { photo: string; id: string }[] = [];
  daysData.forEach((day) => {
    const { photos } = day;
    photos.forEach((photo) => {
      artworks.push({ photo: photo.text, id: day.id });
    });
  });

  // Shuffle the artworks
  // const mixedArtworks = [...artworks].sort(() => Math.random() - 0.5);
  const mixedArtworks = [...artworks];

  // Pick today's artwork
  const todaysArtwork = isItFriday
    ? mixedArtworks.find((artwork) => artwork.id === "friday")
    : mixedArtworks.find((artwork) => artwork.id === "tuesday");

  const outcomeText = isItFriday ? "YES" : "NO";

  const rotateArtwork = () => {
    console.log("rotate!");
  };

  return (
    <>
      <h1 className="sr-only">Is it Friday yet?</h1>
      <Outcome isPositive={isItFriday}>{outcomeText}</Outcome>
      {todaysArtwork ? (
        <AsciiArtFrame asciiArt={todaysArtwork.photo} onClick={rotateArtwork} />
      ) : null}
    </>
  );
}
