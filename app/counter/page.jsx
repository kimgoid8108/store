"use client";

import Image from "next/image";
import counter from "@/public/storecu.png";
import slideImg from "@/public/SlideImage.png";
import front1 from "@/public/Career(front).png";
import front2 from "@/public/Social(front).png";
import front3 from "@/public/Tech(front).png";
import front4 from "@/public/Limited(front).png";
import front5 from "@/public/Project(front).png";
import ContentBox from "@/app/components/ContentBox";

import { ArrowBigUp, ArrowBigDown, CircleArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useResumeAudio from "@/app/hooks/useResumeAudio";

// ✅ 클릭 가능한 이미지 wrapper
const Career = ({ onClick }) => (
  <div className="cursor-pointer z-50 pointer-events-auto" onClick={onClick}>
    <Image src={front1} width={120} height={120} alt="career" />
  </div>
);

const Social = ({ onClick }) => (
  <div className="cursor-pointer z-50 pointer-events-auto" onClick={onClick}>
    <Image src={front2} width={120} height={120} alt="social" />
  </div>
);

const Tech = ({ onClick }) => (
  <div className="cursor-pointer z-50 pointer-events-auto" onClick={onClick}>
    <Image src={front3} width={120} height={120} alt="tech" />
  </div>
);

const Limited = ({ onClick }) => (
  <div className="cursor-pointer z-50 pointer-events-auto" onClick={onClick}>
    <Image src={front4} width={120} height={120} alt="limited" />
  </div>
);

const Project = ({ onClick }) => (
  <div className="cursor-pointer z-50 pointer-events-auto" onClick={onClick}>
    <Image src={front5} width={120} height={120} alt="project" />
  </div>
);

export default function Page() {
  const router = useRouter();
  const [load, setLoad] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [exitAnim, setExitAnim] = useState(false);

  // ✅ 클릭된 항목
  const [click, setClick] = useState(null);

  useResumeAudio(); // ✅ global audio 유지

  // 뒤로가기 fade-out
  const handleEnter = () => setExitAnim(true);

  // 초기 fade-in
  useEffect(() => {
    const t = setTimeout(() => setLoad(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ✅ 페이드 컨트롤 */}
      <div
        className={`
          w-full h-full transition-opacity duration-700
          ${exitAnim ? "opacity-0" : load ? "opacity-100" : "opacity-0"}
        `}
        onTransitionEnd={() => exitAnim && router.push("/")}>
        {/* ✅ 뒤로가기 */}
        <CircleArrowLeft
          onClick={handleEnter}
          size={50}
          className="absolute top-4 left-4 z-[999] cursor-pointer
          text-white transition duration-300
          hover:[text-shadow:0_0_10px_#C7F000_0_0_20px_#C7F000_0_0_30px_#C7F000]"
        />

        {/* ✅ 배경 */}
        <Image
          src={counter}
          alt="counter"
          fill
          className="object-cover object-center"
        />

        {/* ✅ Left Arrow */}
        {openLeft ? (
          <ArrowBigDown
            onClick={() => setOpenLeft(false)}
            size={50}
            className="cursor-pointer absolute bottom-3 left-[25%] -translate-x-1/2 
              text-white z-50 transition-transform float"
          />
        ) : (
          <ArrowBigUp
            onClick={() => setOpenLeft(true)}
            size={50}
            className="cursor-pointer absolute bottom-3 left-[25%] -translate-x-1/2 
              text-black z-50 transition-transform float"
          />
        )}

        {/* ✅ Right Arrow */}
        {openRight ? (
          <ArrowBigDown
            onClick={() => setOpenRight(false)}
            size={50}
            className="cursor-pointer absolute bottom-3 right-[25%] -translate-x-1/2 
              text-white z-50 transition-transform float"
          />
        ) : (
          <ArrowBigUp
            onClick={() => setOpenRight(true)}
            size={50}
            className="cursor-pointer absolute bottom-3 right-[25%] -translate-x-1/2 
              text-black z-50 transition-transform float"
          />
        )}

        {/* ✅ 왼쪽 슬라이드 */}
        <div
          className={`
            absolute bottom-3 left-[25%] -translate-x-1/2 z-40
            transition-transform duration-700 ease-out
            ${openLeft ? "translate-y-0" : "translate-y-full"}
          `}>
          <div className="relative">
            <Image src={slideImg} alt="slide image" width={350} height={350} />

            <div className="absolute inset-0 flex items-center justify-center bottom-[110px]">
              <Career onClick={() => setClick("career")} />
            </div>

            <div className="absolute inset-0 flex items-center justify-center bottom-[-300px]">
              <Social onClick={() => setClick("social")} />
            </div>
          </div>
        </div>

        {/* ✅ 오른쪽 슬라이드 */}
        <div
          className={`
            absolute bottom-3 right-[9%] -translate-x-1/2 z-40
            transition-transform duration-700 ease-out
            ${openRight ? "translate-y-0" : "translate-y-full"}
          `}>
          <Image src={slideImg} alt="slide image" width={350} height={350} />

          <div className="absolute inset-0 flex items-center justify-center bottom-[490px] z-50">
            <Tech onClick={() => setClick("tech")} />
          </div>

          <div className="absolute inset-0 flex items-center justify-center bottom-[110px]">
            <Limited onClick={() => setClick("limited")} />
          </div>

          <div className="absolute inset-0 flex items-center justify-center bottom-[-300px]">
            <Project onClick={() => setClick("project")} />
          </div>
        </div>
      </div>

      <ContentBox selected={click} onClose={() => setClick(null)} />
    </div>
  );
}
