"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "923054353729";

  const message = encodeURIComponent(
    "Hi AK IT Solutions, I would like to discuss my project."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
    >
      <MessageCircle size={32} />
    </a>
  );
}