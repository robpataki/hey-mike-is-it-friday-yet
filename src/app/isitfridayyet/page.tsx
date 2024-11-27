import AsciiArtFrame from "@/components/AsciiArtFrame/AsciiArtFrame";
import { data } from "../../data/data";

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
  const mixedArtworks = [...artworks].sort(() => Math.random() - 0.5);

  // Pick today's artwork
  const todaysArtwork = isItFriday
    ? mixedArtworks.find((artwork) => artwork.id === "friday")
    : mixedArtworks.find((artwork) => artwork.id !== "friday");

  const answerClassName = `answer ${isItFriday ? "answer--yes" : ""}`;
  const answerText = isItFriday ? "YES" : "NO";

  return (
    <>
      <h1 className="sr-only">Is it Friday yet?</h1>
      <div className={answerClassName}>{answerText}</div>
      {todaysArtwork ? <AsciiArtFrame asciiArt={todaysArtwork.photo} /> : null}
    </>
  );
}
