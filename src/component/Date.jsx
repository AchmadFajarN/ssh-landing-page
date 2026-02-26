"use client"
import { useEffect, useState } from "react";
import { motion } from "motion/react"

export default function DateDisplay({ ref }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="font-poppins text-sm tracking-wide">
      {date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "short",
      })}
    </div>
  );
}
