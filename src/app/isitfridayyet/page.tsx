import { data } from "../../data/data";

export default function IsItFriday() {
  return (
    <>
      <h1>Is it Friday yet?</h1>
      {data.days.map((day) => {
        return day.photos.map((photo: { text: string }, index: number) => {
          return (
            <div className="pre-wrapper" key={`${day.id}-${index}`}>
              <h2>{day.id}</h2>
              <pre>{photo.text}</pre>
            </div>
          );
        });
      })}
    </>
  );
}
