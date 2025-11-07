"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

const SignBoard = () => {
  return (
    <>
      <ChevronDown
        size={50}
        className="
       absolute top-[25%] left-[48.5%] text-white
       transition-transform
       translate-y-[30px]
       [text-shadow:0_0_10px_#C7F000,0_0_20px_#C7F000,0_0_30px_#C7F000]
       float"
      />
      <Link
        href={"/cuboard"}
        className="
       absolute
       cursor-pointer
       top-[30.7%] left-[49.87%]
       -translate-x-1/2
       transition duration-200
       hover:brightness-125 hover:shadow-[0_0_20px_#C7F000]">
        <div className="w-[197px] h-[105px]"></div>
      </Link>
    </>
  );
};

export default SignBoard;
