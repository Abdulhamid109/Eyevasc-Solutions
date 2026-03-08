"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappBot() {

  const whatsappLink =
    "https://api.whatsapp.com/send?phone=919205667459&text=Hi%20Eyehealthcure,%20I%20want%20to%20connect%20with%20Eyehealthcure%20healthcare%20expert";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}