"use client";

import { useRef, useEffect, useContext } from "react";
import { AudioContextGlobal } from "@/app/layout";
import LyricOnly from "./LyricOnly";

export default function Equalizer() {
  const canvasRef = useRef(null);
  const { play, isPlaying, audioRef, analyser } =
    useContext(AudioContextGlobal);

  useEffect(() => {
    if (!isPlaying) return;
    if (!audioRef.current) return;
    if (!analyser?.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx2d = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 150;

    const bufferLength = analyser.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let phase = 0;

    const draw = () => {
      if (!isPlaying) return;
      requestAnimationFrame(draw);

      analyser.current.getByteFrequencyData(dataArray);

      ctx2d.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 1.5;
      let x = 0;

      const t = (Math.sin(phase) + 1) / 2;
      const r = 78 + (199 - 78) * t;
      const g = 42 + (240 - 42) * t;
      const b = 132 + (0 - 132) * t;
      const color = `rgb(${r}, ${g}, ${b})`;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        ctx2d.fillStyle = color;
        ctx2d.shadowColor = color;
        ctx2d.shadowBlur = 12;
        ctx2d.fillRect(x, 0, barWidth, barHeight / 2);
        x += barWidth + 1;
      }

      phase += 0.05;
    };

    draw();
  }, [isPlaying]);

  return (
    <div className="fixed top-0 left-0 w-full flex flex-col items-center justify-center mt-8 z-50">
      {!isPlaying && (
        <button
          onClick={play}
          className="bg-[#C7F000] text-[#4E2A84] px-6 py-3 rounded-xl font-bold text-lg hover:brightness-110 transition mb-4">
          🎵 재생 시작
        </button>
      )}

      {isPlaying && (
        <div className="relative w-full h-[150px]">
          <canvas
            ref={canvasRef}
            className="absolute top-[-35px] left-0 w-full h-[130px] pointer-events-none origin-top z-40"
          />
        </div>
      )}

      <LyricOnly isPlaying={isPlaying} />
    </div>
  );
}
