import React, { useState, useEffect } from "react"

export const LanguageId = React.createContext()

export default function LanguageProvider(props) {
  const [lang, setId] = useState(props.lang)

  const setLang = id => {
    setId(id)
    localStorage.setItem("lang", id)
  }
  useEffect(() => {
    const storeId = parseInt(localStorage.getItem("lang"))

    if (props.lang !== lang) setLang(props.lang)
    else if (storeId && storeId !== lang) setId(storeId)
  }, [setId, lang, props.lang])

  return <LanguageId.Provider value={{ lang, setLang }} {...props} />
}
