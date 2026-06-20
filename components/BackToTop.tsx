"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center
                  rounded-full border border-navy-100 bg-white text-navy-700
                  shadow-card transition-all duration-300
                  hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white
                  ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <ArrowUp size={18} />
    </button>
  );
}
