"use client";

import { Suspense } from "react";
import { useHydration } from "@/hooks/useHydration";

export const LocaleDate = () => {
  const isHydrated = useHydration();
  return (
    <Suspense key={isHydrated ? "local" : "utc"}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <time dateTime={new Date().toLocaleString()}>
          {isHydrated ? "Client" : "Server"} locale time:{" "}
          {new Date().toLocaleString()}
          {isHydrated ? "" : " (UTC)"}
        </time>
        <div>
          {isHydrated ? "Client" : "Server"} locale date:{" "}
          {new Date().toString()}
        </div>
      </div>
    </Suspense>
  );
};
