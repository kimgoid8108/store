"use client";

import Image from "next/image";
import bg from "@/public/background.png";
import About from "@/public/AboutMe(front).png";
import { CircleArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useResumeAudio from "@/app/hooks/useResumeAudio";

export default function Page() {
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const [exitAnim, setExitAnim] = useState(false);
  const [boxShown, setBoxShown] = useState(false);
  useResumeAudio();

  // ✅ 초기 fade-in
  useEffect(() => {
    const timer = setTimeout(() => setLoad(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // ✅ 배경 fade-in 끝 → 1초 뒤 box 등장
  useEffect(() => {
    if (load) {
      const timer = setTimeout(() => setBoxShown(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [load]);

  const handleEnter = () => {
    setExitAnim(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex justify-center items-center">
      {/* ✅ 배경 */}
      <Image
        src={bg}
        alt="store background"
        fill
        className={`object-cover object-center transition-opacity duration-700
          ${exitAnim ? "opacity-0" : load ? "opacity-100" : "opacity-0"}`}
        style={{
          transform: "translate(0%, 80%) scale(6)",
          transformOrigin: "center",
        }}
        onTransitionEnd={() => {
          if (exitAnim) router.push("/");
        }}
      />

      {/* ✅ 뒤로가기 */}
      <CircleArrowLeft
        onClick={handleEnter}
        size={50}
        className="absolute top-4 left-4 z-40 cursor-pointer
          text-white transition duration-300
          hover:[text-shadow:0_0_10px_#C7F000,0_0_20px_#C7F000,0_0_30px_#C7F000]"
      />

      <div
        className={`
    relative z-50 w-[1700px] h-[900px]
    bg-black/50 
    flex justify-around items-center
    transition-all duration-700
    ${
      exitAnim
        ? "opacity-0 scale-0"
        : boxShown
        ? "opacity-100 scale-100"
        : "opacity-0 scale-0"
    }
  `}
        style={{
          transformOrigin: "center",
        }}>
        <div>
          <Image
            className="w-[350px] h-[500px]"
            src={About}
            alt="AboutMe(front).png"></Image>
        </div>
        <div className="relative w-[900px] h-[400px] left-6">
          <h2 className="text-white text-[50px]">About me</h2>
          <span className="text-white text-[20px] leading-8 text-xl">
            저는 현재 국비지원 산대특 과정에서 CI/CD를 포함한 풀스택 개발 과정을
            학습하고 있습니다.
            <br />
            프론트엔드 영역은 HTML, CSS, JavaScript, React, Next.js 등 주요
            기술을 모두 이수하여 UI 구현과 사용자 경험 개선에 집중해 왔습니다.
            <br />
            특히 상태 관리, API 연동, 반응형 디자인 구현, 컴포넌트 아키텍처 설계
            등 실무에 필요한 역량을 탄탄히 다져왔습니다. 현재는 서버 개발과
            데이터베이스를 포함한 백엔드 영역을 학습하며 전체 서비스 구조를
            설계할 수 있는 개발자로 성장하기 위해 노력하고 있습니다.
            <br />
            CI/CD 환경 구축 또한 배우고 있으며, 이를 통해 개발–배포–유지보수 전
            과정을 이해하고 자동화하는 경험을 쌓고 있습니다.
            <br />
            저는 새로운 기술을 배우는 과정에서 주도적으로 탐구하고, 스스로
            프로젝트를 만들어 보며 문제 해결 능력을 키우는 것을 좋아합니다.
            <br />
            앞으로도 사용자와 서비스가 만나는 전 과정을 이해하며, 더 나은
            서비스를 제공할 수 있는 개발자를 목표로 하고 있습니다.
          </span>
        </div>
      </div>
    </div>
  );
}
