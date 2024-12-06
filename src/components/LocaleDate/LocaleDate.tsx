"use client";

import { Suspense } from "react";
import { useHydration } from "@/hooks/useHydration";

export const LocaleDate = () => {
  const isHydrated = useHydration();
  return (
    <Suspense key={isHydrated ? "local" : "utc"}>
      <time
        dateTime={new Date().toLocaleString()}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {isHydrated ? "Client" : "Server"} time: {new Date().toLocaleString()}
        {isHydrated ? "" : " (UTC)"}
      </time>
    </Suspense>
  );
};
