"use client";

import bg from "@/public/background.png";
import Image from "next/image";
import Store from "../components/Store";
import VendingMachine from "../components/VendingMachine";
import SignBoard from "../components/SignBoard";
import Equalizer from "../components/Equalizer";
import LyricOnly from "../components/LyricOnly";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BgImage = () => {
  const searchParams = useSearchParams();
  const fromCounter = searchParams.get("from") == "counter";
  const fromCan = searchParams.get("from") == "can";
  const fromBoard = searchParams.get("from") == "board";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ✅ mount 후에 무조건 true
    requestAnimationFrame(() => setMounted(true));
  }, []);

  return (
    <motion.div
      className="relative w-full h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{
        duration: fromCounter && fromCan && fromBoard ? 0 : 1.0, // ✅ counter → fade-in, 직접 진입 → 즉시
        ease: "easeInOut",
      }}>
      <Equalizer />

      <Image
        src={bg}
        alt="background"
        fill
        className="object-cover object-center fixed top-0 left-0 -z-10"
      />

      <SignBoard />
      <Store />
      <VendingMachine />
      <LyricOnly />
    </motion.div>
  );
};

export default BgImage;
