"use client";

import { useContext, useEffect } from "react";
import { AudioContextGlobal } from "@/app/layout";

export default function useResumeAudio() {
  const { isPlaying, play } = useContext(AudioContextGlobal);

  useEffect(() => {
    if (isPlaying) {
      play();
    }
  }, [isPlaying, play]);
}
