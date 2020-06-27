const fetchTranslation = (template, langCode) => {
  try {
    const translation = require(`../translations/${template}.${langCode}.json`)
    return translation
  } catch (err) {
    throw new Error(
      `Rorre: ${err}
      Faild Load Translations File Make sure that you were added file named like template.
      for example name index.en.json for index.js template`
    )
  }
}

module.exports = fetchTranslation
