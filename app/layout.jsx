"use client";

import { createContext, useEffect, useRef, useState } from "react";
import "./globals.css";

export const AudioContextGlobal = createContext(null);

export default function RootLayout({ children }) {
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);

  // ✅ 재생할 곡 목록
  const playlist = ["/code-and-counter1.mp3", "/loop_life.mp3"];

  /** 🎧 MediaElementSource 다시 연결 */
  const connectSource = () => {
    if (!audioCtxRef.current || !audioRef.current) return;

    try {
      if (sourceRef.current) {
        sourceRef.current.disconnect();
      }

      sourceRef.current = audioCtxRef.current.createMediaElementSource(
        audioRef.current
      );

      sourceRef.current.connect(analyserRef.current);
      analyserRef.current.connect(audioCtxRef.current.destination);
    } catch (e) {
      console.log("⚠️ Source 재연결 실패:", e);
    }
  };

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(playlist[trackIndex]);
      audioRef.current.loop = false;
    }

    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
    }

    if (!analyserRef.current) {
      analyserRef.current = audioCtxRef.current.createAnalyser();
      analyserRef.current.fftSize = 64;
    }

    connectSource();

    const audio = audioRef.current;

    audio.onended = () => {
      setTrackIndex((prev) => {
        const next = (prev + 1) % playlist.length;
        audio.src = playlist[next];
        audio.load();
        connectSource();
        audioCtxRef.current?.resume();
        audio.play().catch(() => {});
        return next;
      });
    };

    return () => {
      audio.onended = null;
    };
  }, []);

  /** ▶️ 재생 */
  const play = () => {
    if (!audioCtxRef.current) return;
    audioCtxRef.current.resume();
    audioRef.current?.play();
    setIsPlaying(true);
  };

  /** ⏸ 정지 */
  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  return (
    <html lang="en">
      <body>
        <AudioContextGlobal.Provider
          value={{
            play,
            pause,
            isPlaying,
            audioRef,
            analyser: analyserRef,
          }}>
          {children}
        </AudioContextGlobal.Provider>
      </body>
    </html>
  );
}
