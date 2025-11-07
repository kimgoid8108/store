"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { contentData } from "@/app/data/contentData";

export default function ContentBox({ selected, onClose }) {
  if (!selected) return null;

  const { title, img, text } = contentData[selected];
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300); // animation duration과 동일
  };

  return (
    <div
      className={`
        fixed inset-0 bg-black/70
        flex justify-center items-center
        z-[900]
        ${closing ? "animate-fadeOut" : "animate-fadeIn"}
      `}>
      <div
        className={`
          bg-[#222] text-white p-8 rounded-xl
          w-[900px] max-w-[90%] h-[600px]
          relative flex gap-10 items-center
          ${closing ? "animate-scaledown" : "animate-scaleUp"}
        `}>
        <button
          className="absolute top-4 right-4 text-white"
          onClick={handleClose}>
          <X size={32} className="cursor-pointer" />
        </button>

        <div>
          <Image src={img} alt={title} width={350} height={450} />
        </div>

        <div className="flex flex-col gap-4 w-[60%]">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-[15px] leading-relaxed whitespace-pre-line">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
