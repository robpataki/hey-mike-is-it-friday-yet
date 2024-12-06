import { useEffect, useState } from "react";

export function useHydration() {
  const [isHhydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return isHhydrated;
}
