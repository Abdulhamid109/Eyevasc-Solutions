"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function FestiveConfetti() {
  const [festival, setFestival] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const fetchFestivals = async () => {

      const year = new Date().getFullYear();

      const res = await fetch(
        `https://date.nager.at/api/v3/PublicHolidays/${year}/IN`
      );

      const data = await res.json();

      const today = new Date();

      const fest = data.find((f: any) => {

        const festDate = new Date(f.date);

        const diff =
          Math.abs(festDate.getTime() - today.getTime()) /
          (1000 * 60 * 60 * 24);

        return diff <= 1; // show popup 1 day before or after
      });

      if (!fest) return;

      setFestival({
        name: fest.localName,
        greeting: `Happy ${fest.localName}!`,
        offer: "Free Eye Consultation + Special Festival Discount"
      });

      setTimeout(() => setIsVisible(true), 500);

      // Confetti
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({ particleCount: 3, angle: 60, spread: 55, origin: { x: 0, y: 0.8 } });
        confetti({ particleCount: 3, angle: 120, spread: 55, origin: { x: 1, y: 0.8 } });

        if (Date.now() < end) requestAnimationFrame(frame);
      };

      frame();
    };

    fetchFestivals();

  }, []);

  if (!festival) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      <div className={`relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden max-w-sm w-full transform transition-all duration-700 ${isVisible ? 'scale-100 translate-y-0' : 'scale-90 translate-y-10'}`}>
        
        <div className="h-2 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400" />

        <div className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-50 rounded-full mb-4 text-3xl">
            ✨
          </div>

          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-500">
            {festival.greeting}
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-3 font-medium">
            Celebrate with healthy vision 👁️
          </p>

          <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 rounded-xl">
            <p className="text-orange-700 dark:text-orange-300 text-sm font-bold leading-relaxed">
              {festival.offer}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <button className="w-full bg-gray-900 dark:bg-white dark:text-gray-900 text-white font-bold py-4 rounded-xl hover:opacity-90 transition-transform active:scale-95 shadow-lg">
              Book Appointment
            </button>

            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 text-xs font-semibold hover:text-gray-600 transition-colors uppercase tracking-widest"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}