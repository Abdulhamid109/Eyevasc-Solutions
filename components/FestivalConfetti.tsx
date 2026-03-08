"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";
import { festivals2026, Festival } from "@/data/festiveData";

export default function FestiveConfetti() {

  const [festival, setFestival] = useState<Festival | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const fest = festivals2026.find((f) => {
      return today >= f.start && today <= f.end;
    });

    if (!fest) return;

    const storageKey= `festival-${fest.name}`;
    if (localStorage.getItem(storageKey)) return;
    localStorage.setItem(storageKey, "shown");

    const festivalEffect =()=>{
      setFestival(fest);
    }
    festivalEffect();

    const timer = setTimeout(() => setVisible(true), 400);

    /* ---------- Confetti ---------- */

    const duration = 3500;
    const end = Date.now() + duration;

    const frame = () => {

      confetti({
        particleCount: 4,
        angle: 60,
        spread: 60,
        origin: { x: 0 }
      });

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 60,
        origin: { x: 1 }
      });

      if (Date.now() < end) requestAnimationFrame(frame);

    };

    frame();

    return () => clearTimeout(timer);

  }, []);

  if (!festival) return null;

  return (

    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}>

      <div className={`bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-sm w-full transform transition-all duration-700 ${visible ? "scale-100" : "scale-90"} overflow-hidden`}>

        <div className="h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400" />

        <div className="p-8 text-center">

          <div className="text-4xl mb-4">✨</div>

          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500">
            {festival.greeting}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Celebrate with healthy vision 👁️
          </p>

          <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">

            <p className="text-orange-700 dark:text-orange-300 font-semibold text-sm">
              {festival.offer}
            </p>

          </div>

          <div className="mt-8 flex flex-col gap-3">

            <Link
              href="/booknow"
              className="bg-black text-white py-4 rounded-xl font-bold hover:opacity-90 transition"
            >
              Book Appointment
            </Link>

            <button
              onClick={() => {
                setVisible(false);
                setTimeout(() => setFestival(null), 400);
              }}
              className="text-xs text-gray-400 uppercase tracking-wider hover:text-gray-600 transition"
            >
              Maybe Later
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}