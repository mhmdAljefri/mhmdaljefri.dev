import { useState, useEffect, useCallback } from "react"

// Usage
/*
  function App() {
    const size = useWindowSize();

    return (
      <div>
        {size.width}px / {size.height}px
      </div>
    );
  }
*/

// Hook
function useWindowSize() {
  const isClient = typeof window === "object"

  const getSize = useCallback(() => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }, [isClient])

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isClient, getSize]) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export default useWindowSize
