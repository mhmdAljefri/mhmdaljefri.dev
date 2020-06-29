import React from "react"
import { LanguageId } from "../context/language"

const useLanguage = () => React.useContext(LanguageId)

export default useLanguage
