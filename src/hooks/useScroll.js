/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollY } = useScroll();
 */

import { useState, useEffect } from "react";
import { getWindow } from "../config/helperFunctions";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  const listener = () => {
    setScrollY(getWindow.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    scrollY,
  };
}
