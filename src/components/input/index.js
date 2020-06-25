import React from "react"
import { Input as ThemeInput, Box, Label, Textarea } from "theme-ui"
import { FastField } from "formik"

export default function Input({ name, label, type, containerStyle, ...props }) {
  return (
    <Box sx={{ marginBottom: 10, ...containerStyle }}>
      <Label htmlFor={name}>{label}</Label>
      {type === "textarea" ? (
        <Textarea {...props} id={name} />
      ) : (
        <ThemeInput {...props} id={name} />
      )}
    </Box>
  )
}

export function Field(props) {
  return <FastField {...props} component={Input} />
}
