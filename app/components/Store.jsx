import { ChevronDown } from "lucide-react";
import Link from "next/link";

const Store = () => {
  return (
    <>
      <ChevronDown
        size={50}
        className="
       absolute top-[41%] left-[48.7%] text-white
       transition-transform
       translate-y-[30px]
       [text-shadow:0_0_10px_#C7F000,0_0_20px_#C7F000,0_0_30px_#C7F000]
       float"
      />
      <Link
        href="/storein"
        className="
     absolute
     cursor-pointer
     top-[47.3%] left-[50.03%]
     -translate-x-1/2
     transition duration-200
     hover:brightness-125 hover:shadow-[0_0_20px_#C7F000]">
        <div className="w-[186.5px] h-[210px]"></div>
      </Link>
    </>
  );
};

export default Store;
