import React from "react"
import { Input as ThemeInput, Box, Label, Textarea, Alert } from "theme-ui"
import { FastField } from "formik"

export default function Input({
  name,
  label,
  type,
  containerStyle,
  errorMessage,
  ...props
}) {
  return (
    <Box sx={{ marginBottom: 10, ...containerStyle }}>
      <Label htmlFor={name}>{label}</Label>
      {type === "textarea" ? (
        <Textarea {...props} name={name} id={name} />
      ) : (
        <ThemeInput {...props} name={name} id={name} />
      )}
      {errorMessage && (
        <Alert sx={{ marginTop: 2 }} variant="error" as="span">
          {errorMessage}
        </Alert>
      )}
    </Box>
  )
}

export function Field(props) {
  return <FastField {...props} component={Input} />
}
