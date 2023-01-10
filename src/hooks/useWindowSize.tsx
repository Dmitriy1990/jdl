import { useState, useLayoutEffect } from "react";

export default function useWindowSize(): number {
  const [windowSize, setWindowSize] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    if (window.innerWidth > 0) handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return windowSize;
}
