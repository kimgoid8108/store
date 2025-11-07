"use client";
import { useEffect, useState } from "react";

const lyrics = [
  { time: 0, text: "- 낮엔 코드, 밤엔 카운터, -" },
  { time: 126, text: "- loop_life -" },
];

export default function LyricOnly({ isPlaying }) {
  const [currentTime, setCurrentTime] = useState(0);
  const [currentLyric, setCurrentLyric] = useState("");

  // 🎬 재생 상태일 때만 타이머 작동
  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setCurrentTime(elapsed);
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const line = lyrics.filter((l) => l.time <= currentTime).pop();
    if (line) setCurrentLyric(line.text);
  }, [currentTime]);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white rounded-xl p-4 w-100 shadow-lg backdrop-blur-md">
      <p
        className={`text-center text-[15px] italic text-sm transition-all duration-700 ${
          isPlaying ? "opacity-100" : "opacity-50"
        }`}>
        {isPlaying ? currentLyric : "🎧 Ready..."}
      </p>
    </div>
  );
}
