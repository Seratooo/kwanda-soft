"use client";
import { Calendar } from "@/components/ui/calendar";
import { pt } from "date-fns/locale";
import { useState } from "react";

export default function CalendarComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border bg-gray-100"
      locale={pt}
    />
  );
}
