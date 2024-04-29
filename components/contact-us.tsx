"use client"

import { FormEvent, useState } from "react"

import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

const initFormState = {
  name: "",
  email: "",
  phone: "",
  hear: "",
  message: "",
}

export default function ContactUs() {
  const [isFormSending, setIsFormSending] = useState(false)
  const [formValue, setFormValue] = useState(initFormState)

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormSending(true)
    const formSubmit = await fetch(`/api/form-submit`, {
      method: "POST",
      body: JSON.stringify(formValue),
      cache: "no-cache",
    })
    if (formSubmit.ok) {
      alert("Your message have been sent")
      setFormValue(initFormState)
    } else {
      alert("Something went wrong. Please try again")
    }
    setIsFormSending(false)
  }

  return (
    <div className="flex justify-center">
      <form
        className="flex text-secondary flex-col gap-3 w-full md:w-4/6 lg:w-3/6"
        onSubmit={handleSendMessage}
      >
        <div className="grid">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Input
              required
              placeholder="Name"
              value={formValue.name}
              onChange={(e) =>
                setFormValue((fv) => ({
                  ...formValue,
                  name: e.target.value,
                }))
              }
              className="h-16"
              type="text"
              id="name"
            />
            <Input
              required
              placeholder="Email"
              value={formValue.email}
              onChange={(e) =>
                setFormValue((fv) => ({
                  ...formValue,
                  email: e.target.value,
                }))
              }
              className="h-16"
              type="email"
              id="email"
            />
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2">
            <Input
              required
              placeholder="Phone Number"
              value={formValue.phone}
              onChange={(e) =>
                setFormValue((fv) => ({
                  ...formValue,
                  phone: e.target.value,
                }))
              }
              className="h-16"
              type="tel"
              id="phone"
            />
            <Input
              required
              placeholder="How did you hear about me?"
              value={formValue.hear}
              onChange={(e) =>
                setFormValue((fv) => ({
                  ...formValue,
                  hear: e.target.value,
                }))
              }
              className="h-16"
              type="text"
              id="hear"
            />
          </div>
          <Textarea
            required
            placeholder="Message"
            value={formValue.message}
            onChange={(e) =>
              setFormValue((fv) => ({
                ...formValue,
                message: e.target.value,
              }))
            }
            className="h-28"
            id="message"
          />
        </div>
        <div>
          <Button
            disabled={isFormSending}
            type="submit"
            size="lg"
            className="bg-accent text-background hover:bg-accent-foreground"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  )
}
