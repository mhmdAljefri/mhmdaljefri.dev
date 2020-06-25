import { useLocation } from "@reach/router"

export default function useLang() {
  const { pathname } = useLocation()
  const currentLanguage = pathname.includes("/ar/") ? "ar" : "en"
  return currentLanguage
}
