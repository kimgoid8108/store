import { ChevronDown } from "lucide-react";
import Link from "next/link";

const VendingMachine = () => {
  return (
    <>
      <ChevronDown
        size={50}
        className="
       absolute top-[46%] right-[13.3%] text-white
       transition-transform
       translate-y-[30px]
       [text-shadow:0_0_10px_#C7F000,0_0_20px_#C7F000,0_0_30px_#C7F000]
       float"
      />
      <Link
        href={"/machine"}
        className="
          absolute
          cursor-pointer
          top-[52.5%] right-[12.83%]
          -translate-x-1/2
          transition duration-200
           hover:brightness-125 hover:shadow-[0_0_20px_#C7F000]
        ">
        <div className="w-[31px] h-[66.2px]"></div>
      </Link>
    </>
  );
};

export default VendingMachine;
