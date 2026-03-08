"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

/* ---------- Types ---------- */

type Festival = {
  name: string;
  greeting: string;
  offer: string;
  start: string;
  end: string;
};

/* ---------- 2026 FESTIVAL CALENDAR ---------- */

const festivals2026: Festival[] = [

  {
    name: "demo",
    greeting: "Happy Republic Day 🇮🇳",
    offer: "Free Eye Checkup for Senior Citizens",
    start: "2026-01-08",
    end: "2026-03-08"
  },

  {
    name: "Republic Day",
    greeting: "Happy Republic Day 🇮🇳",
    offer: "Free Eye Checkup for Senior Citizens",
    start: "2026-01-26",
    end: "2026-01-26"
  },

  {
    name: "Ramadan",
    greeting: "Ramadan Mubarak 🌙",
    offer: "Special Ramadan Eye Care Package",
    start: "2026-02-18",
    end: "2026-03-19"
  },

  {
    name: "Holi",
    greeting: "Happy Holi 🎨",
    offer: "Free Eye Consultation + Holi Discount",
    start: "2026-03-02",
    end: "2026-03-05"
  },

  {
    name: "Ram Navami",
    greeting: "Happy Ram Navami 🙏",
    offer: "Festival Vision Care Offer",
    start: "2026-03-26",
    end: "2026-03-27"
  },

  {
    name: "Independence Day",
    greeting: "Happy Independence Day 🇮🇳",
    offer: "Free Eye Checkup Camp",
    start: "2026-08-15",
    end: "2026-08-15"
  },

  {
    name: "Raksha Bandhan",
    greeting: "Happy Raksha Bandhan ❤️",
    offer: "Family Eye Checkup Discount",
    start: "2026-08-29",
    end: "2026-08-30"
  },

  {
    name: "Janmashtami",
    greeting: "Happy Janmashtami 🦚",
    offer: "Krishna Festival Eye Care Offer",
    start: "2026-09-05",
    end: "2026-09-06"
  },

  {
    name: "Navratri",
    greeting: "Happy Navratri 🪔",
    offer: "Navratri Special Vision Checkup",
    start: "2026-10-10",
    end: "2026-10-18"
  },

  {
    name: "Dussehra",
    greeting: "Happy Dussehra 🏹",
    offer: "Festival Discount on Eye Treatments",
    start: "2026-10-20",
    end: "2026-10-21"
  },

  {
    name: "Diwali",
    greeting: "Happy Diwali 🪔",
    offer: "Mega Diwali Eye Care Offer",
    start: "2026-11-05",
    end: "2026-11-10"
  },

  {
    name: "Christmas",
    greeting: "Merry Christmas 🎄",
    offer: "Winter Eye Care Package",
    start: "2026-12-24",
    end: "2026-12-26"
  }

];

/* ---------- Component ---------- */

export default function FestiveConfetti() {

  const [festival, setFestival] = useState<Festival | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const today = new Date().toISOString().split("T")[0];

    const fest = festivals2026.find(f => {

      return today >= f.start && today <= f.end;

    });

    if (!fest) return;

    setFestival(fest);

    setTimeout(() => setVisible(true), 400);

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

            <button className="bg-black text-white py-4 rounded-xl font-bold hover:opacity-90">
              Book Appointment
            </button>

            <button
              onClick={() => setVisible(false)}
              className="text-xs text-gray-400 uppercase tracking-wider"
            >
              Maybe Later
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}