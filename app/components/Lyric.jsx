"use client";
import { useEffect, useRef, useState } from "react";

// 가사 싱크
const lyrics = [
  { time: 0, text: "- 낮엔 코드, 밤엔 카운터, -" },
  { time: 10.3, text: "Yo, 낮엔 코드 짜고 밤엔 카운터, 이영철" },
  { time: 13.8, text: "오늘도 리셋 없이 reboot 한다" },
  { time: 16.5, text: "아침 날씨 출근 옷 부팅" },
  { time: 19.5, text: "커피 한 모금, 눈빛은 루틴" },
  { time: 22.8, text: "React 플로우로 Hook, 집중은 유지" },
  { time: 25.2, text: "버그 잡는 손끝, 그게 나의 duty" },
  { time: 28, text: "commit 한 줄의 땀, command on drop" },
  { time: 30.8, text: "Merge Conflict보다 인생이 hard job" },
  { time: 33.8, text: 'console.log("오늘도 간다")' },
  { time: 36.7, text: "That book, my life, 꿈으로 간다" },

  { time: 39.7, text: "낮엔 코드, 밤엔 카운터," },
  { time: 41.9, text: "삑! flow 소리, 내 리듬은 Founder" },
  { time: 44.7, text: "삼각김밥 정리, 재고는 sync" },
  { time: 47.5, text: "삶이 loop라도 난 break 안 찍지" },

  { time: 50.5, text: "낮엔 코드, 밤엔 카운터," },
  { time: 53.2, text: "삑! flow 소리, 내 리듬은 Founder" },
  { time: 56, text: "삼각김밥 정리, 재고는 sync" },
  { time: 59, text: "삶이 loop라도 난 break 안 찍지" },

  { time: 62, text: "퇴근은 여섯, 알바는 일곱, 야간 mode on" },
  { time: 65.6, text: "인생은 script, 손님 wave" },
  { time: 67.4, text: '난 "결제 도와드릴게요"' },
  { time: 69.6, text: "그 짧은 말 속에도 내 꿈이 있어요" },
  { time: 72.5, text: "Alt-Tab bit, 인생은 stack" },
  { time: 75, text: "commit처럼 쌓이는 track, 오늘도 sick" },
  { time: 77, text: "내 스토리 push, 내일은 build" },
  { time: 78.3, text: "성공할 때까지, hush" },
  { time: 79.3, text: "Clock out, 자정, 숨 고르고 다시" },
  { time: 82, text: "내일도 run, 에러 없이 다시" },
  { time: 84.5, text: 'console.log("오늘도 간다")' },
  { time: 87.4, text: "That book, my life, 꿈으로 간다" },

  { time: 90.5, text: "낮엔 코드, 밤엔 카운터," },
  { time: 92.7, text: "삑! flow 소리, 내 리듬은 Founder" },
  { time: 95.6, text: "삼각김밥 정리, 재고는 sync" },
  { time: 98.5, text: "삶이 loop라도 난 break 안 찍지" },

  { time: 102, text: "낮엔 코드, 밤엔 카운터," },
  { time: 104, text: "삑! flow 소리, 내 리듬은 Founder" },
  { time: 107, text: "삼각김밥 정리, 재고는 sync" },
  { time: 109.8, text: "삶이 loop라도 난 break 안 찍지" },

  { time: 112.5, text: "Clock out, 자정, 숨 고르고 다시" },
  { time: 115.3, text: "내일도 run, 에러 없이 다시" },
  { time: 118, text: 'console.log("이영철 살아있다")' },
  { time: 121.5, text: "Code & Counter, 그게 내 Data" },
  { time: 125, text: "- 끝 -" },
];

export default function LyricWidget() {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentLyric, setCurrentLyric] = useState("");

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const update = () => {
      setCurrentTime(audio.currentTime);
      requestAnimationFrame(update);
    };

    audio.addEventListener("play", update);
    return () => audio.removeEventListener("play", update);
  }, []);

  useEffect(() => {
    const line = lyrics.filter((l) => l.time <= currentTime).pop();
    if (line) setCurrentLyric(line.text);
  }, [currentTime]);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white rounded-xl p-4 w-80 shadow-lg backdrop-blur-md">
      <audio
        ref={audioRef}
        controls
        src="/music/code-and-counter1.mp3"
        className="w-full mb-2"
        loop
      />

      <p className="text-sm text-center italic">{currentLyric}</p>
    </div>
  );
}
