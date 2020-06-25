import React from "react"
import { Formik, Form as FForm } from "formik"
import { Field } from "../input"
import { Button } from "theme-ui"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Form() {
  const onSubmit = values => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },

      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  return (
    <Formik onSubmit={onSubmit}>
      {({ handleSubmit, handleChange }) => (
        <FForm onSubmit={handleSubmit}>
          {/* You still need to add the hidden input with the form name to your JSX form */}
          <Field name="name" label="Name" />
          <Field name="email" required type="email" label="Email" />
          <Field name="question" required type="textarea" label="Question" />
          <Button>Submit</Button>
        </FForm>
      )}
    </Formik>
  )
}
