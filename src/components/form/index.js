import React from "react"
import { Formik, Form as FForm } from "formik"
import Input from "../input"
import { Button } from "theme-ui"
import * as Yup from "yup"

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  question: Yup.string().min(10, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Form() {
  const onSubmit = values => {
    fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },

      body: encode({ "form-name": "contact", ...values }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))
  }

  return (
    <Formik
      validationSchema={ContactSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <FForm
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* You still need to add the hidden input with the form name to your JSX form */}
          <input type="hidden" name="form-name" value="contact" />
          <Input onChange={handleChange} name="name" label="Name" />
          <Input
            onChange={handleChange}
            name="email"
            required
            type="email"
            label="Email"
            errorMessage={touched.email && errors.email}
          />
          <Input
            onChange={handleChange}
            name="question"
            required
            type="textarea"
            label="Question"
            errorMessage={touched.question && errors.question}
          />
          <Button type="submit">Submit</Button>
        </FForm>
      )}
    </Formik>
  )
}
