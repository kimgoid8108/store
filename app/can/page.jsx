"use client";

import Image from "next/image";
import counter from "@/public/canMC.png";
import { CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useResumeAudio from "@/app/hooks/useResumeAudio";

// ✅ 당첨 / 꽝 이미지
import Lucky from "@/public/Lucky.png";
import Boom from "@/public/Boom.png";

const Page = () => {
  const router = useRouter();
  const [load, setLoad] = useState(false); // 초기 페이드인
  const [exitAnim, setExitAnim] = useState(false); // 뒤로가기 → 페이드아웃
  const [result, setResult] = useState(null); // 결과 종류
  const [show, setShow] = useState(false); // 애니메이션용

  // 공통 버튼 스타일
  const baseBtn =
    "absolute top-1/2 left-1/2 w-[34px] h-[15px] bg-transparent z-50 flex justify-center items-center rounded-[10px] transition hover:shadow-[0_0_10px_#C7F000,0_0_20px_#C7F000,0_0_30px_#C7F000]";

  const handleEnter = () => setExitAnim(true);

  // 버튼 클릭 → 랜덤 결과
  const handleRandom = () => {
    const isWin = Math.random() < 0.1;
    setResult(isWin ? "win" : "fail");

    // 애니메이션 초기화 후 시작
    setShow(false);
    setTimeout(() => setShow(true), 10);
  };

  // ✅ 페이지 Load → Fade-in
  useEffect(() => {
    const time = setTimeout(() => setLoad(true), 50);
    return () => clearTimeout(time);
  }, []);

  useResumeAudio();

  // ✅ 버튼 8개 위치
  const btnPositions = [
    "-translate-x-73.5 -translate-y-63",
    "-translate-x-53 -translate-y-63",
    "-translate-x-32.5 -translate-y-63",
    "-translate-x-[47px] -translate-y-63",
    "-translate-x-73.5 -translate-y-7",
    "-translate-x-53 -translate-y-7",
    "-translate-x-32.5 -translate-y-7",
    "-translate-x-[47px] -translate-y-7",
  ];

  return (
    <div
      className={`
        relative w-full h-screen
        transition-opacity duration-700
        ${exitAnim ? "opacity-0" : load ? "opacity-100" : "opacity-0"}
      `}
      onTransitionEnd={() => exitAnim && router.push("/")}>
      {/* ✅ Back Icon */}
      <CircleArrowLeft
        onClick={handleEnter}
        size={50}
        className="absolute top-4 left-4 z-10 cursor-pointer text-white transition duration-300 hover:[text-shadow:0_0_10px_#C7F000,0_0_20px_#C7F000,0_0_30px_#C7F000]"
      />

      {/* ✅ Background Image */}
      <Image
        src={counter}
        alt="counter"
        fill
        className="object-cover object-center"
      />

      {/* ✅ 버튼 8개 생성 */}
      {btnPositions.map((pos, i) => (
        <button
          key={i}
          className={`${baseBtn} ${pos}`}
          onClick={handleRandom}
        />
      ))}

      {/* ✅ 결과 이미지 - 배출구에서 위로 */}
      {result && (
        <div
          className={`
            absolute
            left-[950px] top-[500px]
            z-[999]
            transition-all duration-700 ease-out
            

            ${
              show
                ? "-translate-x-45 -translate-y-[0px] opacity-100"
                : "-translate-x-45 translate-y-[200px] opacity-0"
            }
          `}>
          <Image
            src={result === "win" ? Lucky : Boom}
            alt={result}
            width={150}
            height={150}
          />
        </div>
      )}

      {/* ✅ 배출구 영역 */}
      <div
        className="
          absolute w-[433px] h-[140px]
          top-1/2 left-1/2 
          -translate-x-82 -translate-y-[-280px]
          text-white text-[30px] flex justify-center items-center 
        ">
        <span className="spin-text inline-block">돌려 돌려 자판기~</span>
      </div>
    </div>
  );
};

export default Page;
