import Career from "@/public/Career(front).png";
import Social from "@/public/Social(front).png";
import Tech from "@/public/Tech(front).png";
import Limited from "@/public/Limited(front).png";
import Project from "@/public/Project(front).png";
import {
  Coffee,
  Gamepad2,
  Github,
  Handbag,
  Instagram,
  MessagesSquare,
  Music,
  Youtube,
} from "lucide-react";

export const contentData = {
  career: {
    title: "경력",
    img: Career,
    text: `저는 군대 가기 전 2년 + 전역 후 1년 10개월,
총 3년 10개월 동안 편의점에서 근무하며
편의점 생태계를 누구보다 깊게 탐험했습니다.

수많은 삼각김밥과 즉석식품을 진열하며
POS 머신과 눈빛으로 대화하는 법을 익혔죠.

특히 계산 속도만큼은
전국 어디에 내놔도 TOP이라고 자신할 수 있습니다.
손님이 상품을 내려놓는 순간,
바코드가 스캐너를 스치기도 전에 결제가 끝나버리는 마법!
“남들보다 빠르게, 남들과는 다르게”
그게 저의 계산 철학입니다.

담배 번호·행사 상품·재고 정리 등
기억해야 할 게 많아도
저는 이를 즐겼습니다.
한마디로 —

편의점에서 못 하는 게 없는 남자.`,
  },
  social: {
    title: "Social",
    img: Social,
    text: (
      <div className="space-y-3">
        <p>SNS를 통해 개발 및 일상을 공유합니다.</p>

        <a
          href="https://github.com"
          target="_blank"
          className="text-blue-400 underline block flex gap-3">
          <Github /> GitHub 바로가기
        </a>

        <a
          href="https://www.instagram.com/2_0_steel"
          target="_blank"
          className="text-pink-400 underline block flex gap-3">
          <Instagram /> Instagram 바로가기
        </a>

        <a
          href="https://www.youtube.com"
          target="_blank"
          className="text-red-400 underline block flex gap-3">
          <Youtube /> Youtube 바로가기
        </a>
      </div>
    ),
  },
  tech: {
    title: "Tech Stack",
    img: Tech,
    text: `개발은 이제 2개월 좀 넘었지만, 저에게는 큰 무기가 있습니다.
바로 끈질김입니다.
생소한 문법에 당황해도, 예상 못 한 에러가 등장해도, 저는 끝까지 물고 늘어집니다.

“버그가 포기할 때까지 난 포기 안 함.”
P.S. 때론 내가 먼저 포기할 때도 있음.

하지만 다시 부딪히면 결국 길이 보이더군요.
현장에서 길러온 순발력,
음악에서 얻은 창의력,
편의점/패스트푸드에서 다져진 멀티태스킹 능력을
코드 속에 한데 녹이며
조금씩 성장하고 있습니다.

아직은 배우는 중이지만
그만큼 빠르게 흡수하고
스스로 한계를 넓혀가며
끝끝내 해결하는 개발자로 성장해 나가고 있습니다.`,
  },
  limited: {
    title: "Limited Music",
    img: Limited,
    text: (
      <div className="space-y-3">
        <a
          href="https://screenapp.io/app/v/EvN7k_clc3"
          target="_blank"
          className="text-red-400 underline block flex gap-3">
          <Music />
          Loop life 듣기
        </a>
        <a
          href="https://screenapp.io/app/v/xCBjk2xOoK"
          target="_blank"
          className="text-blue-400 underline block flex gap-3">
          <Music />
          Code And Counter 듣기
        </a>
      </div>
    ),
  },
  project: {
    title: "Project",
    img: Project,
    text: (
      <div className="space-y-3">
        <a
          href="https://kimgoid8108.github.io/hasamdong/"
          target="_blank"
          className="text-[#A0522D] underline block flex gap-3">
          <Coffee />
          하삼동 프로젝트 보러가기
        </a>
        <a
          href="https://kimgoid8108.github.io/game/"
          target="_blank"
          className="text-blue-400 underline block flex gap-3">
          <Gamepad2 />
          게임 프로젝트 보러가기
        </a>
        <a
          href="https://kimgoid8108.github.io/portfolio-fashion/"
          target="_blank"
          className="text-purple-400 underline block flex gap-3">
          <Handbag />
          패션 프로젝트 보러가기
        </a>
        <a
          href="https://changjong33.github.io/LINE/"
          target="_blank"
          className="text-green-400 underline block flex gap-3">
          <MessagesSquare />
          네이버 라인 프로젝트 보러가기
        </a>
      </div>
    ),
  },
};
