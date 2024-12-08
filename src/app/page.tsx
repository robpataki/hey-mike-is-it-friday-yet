import { ReactNode } from "react";

import Layout from "@/app/layout";
import { data } from "@/data/data";
import { ArtGallery } from "@/components/ArtGallery/ArtGallery";
import { Artwork } from "@/shared/constants";

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
  return (
    <>
      <h1 className="sr-only">Hey Mike, is it Friday yet?</h1>
      <ArtGallery {...{ outcomeText, todaysArtworks, isItFriday }} />
    </>
  );
}

Page.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
