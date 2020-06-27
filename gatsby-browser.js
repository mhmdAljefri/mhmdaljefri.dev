const React = require("react")
const Layout = require("./src/components/layout").default

exports.wrapPageElement = ({
  element,
  props: {
    pageContext: { globalTranslations, title, lang }, // {nav, footer, a11y} see ./src/translations/global.[lang].json
    ...props
  },
}) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <Layout lang={lang} title={title} {...globalTranslations} {...props}>
      {element}
    </Layout>
  )
}
