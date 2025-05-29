"use client"

import React from "react"
import { Calendar } from "@/components/ui/calendar"

export function CathysCalendar() {
  const [date, setDate] = React.useState(new Date())


  const safeDate = date instanceof Date ? date : undefined

  return (
    <Calendar
      mode="single"
      selected={safeDate}
      onSelect={(d) => {
        if (d instanceof Date || d === undefined) {
          setDate(d)
        }
      }}
      className="rounded-md border shadow"
    />
  )
}

