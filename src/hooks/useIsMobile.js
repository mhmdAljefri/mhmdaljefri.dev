import useWindowSize from "./useWindowSize"

export default function useIsMobile() {
  return useWindowSize().width <= 500
}
