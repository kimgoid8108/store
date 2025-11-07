"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bg from "@/public/background.png";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useResumeAudio from "@/app/hooks/useResumeAudio";

const StoreIn = () => {
  const router = useRouter();
  const [enterAnim, setEnterAnim] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnterAnim(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (enterAnim) {
      setTimeout(() => router.push("/counter"), 1200);
    }
  }, [enterAnim]);

  useResumeAudio();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 배경 이미지 */}
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={
          enterAnim
            ? { scale: 5, opacity: 0, x: "0%", y: "-20%" }
            : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0">
        <Image
          src={bg}
          alt="store background"
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* 텍스트나 내부 콘텐츠 */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h2 className="text-[#C7F000] text-3xl font-bold drop-shadow-[0_0_10px_#4E2A84]"></h2>
      </div>
    </div>
  );
};

export default StoreIn;
