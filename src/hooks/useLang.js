import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

export default function useLang() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          languages {
            default
            code
          }
        }
      }
    }
  `)
  const defaultLanguageCode = siteMetadata.languages.find(
    language => language.default
  ).code
  const { pathname } = useLocation()
  const language = pathname.split("/")[0]
  const currentLanguage = language.length === 2 ? language : defaultLanguageCode

  return currentLanguage
}
