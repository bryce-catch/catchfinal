"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Making play accessible!",
  "Every child deserves to play.",
  "Adaptive toys for all.",
  "Switch-adapted play.",
  "Inclusive play, always.",
];

export default function RotatingBubbleText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return <span>{MESSAGES[index]}</span>;
}
