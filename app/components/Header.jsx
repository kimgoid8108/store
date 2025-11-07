

const Header = () => {


  return (
    <div>
      {/* 🔹 헤더 */}
      <div className="w-full h-[80px] bg-[#4E2A84]/70 flex items-center justify-center">
        <div className="flex items-center justify-center w-full gap-6 px-6">
          <div className="flex-1 h-[3px] bg-[#C7F000] max-w-[700px]"></div>
          <h2 className="text-center text-[#C7F000] transition hover:text-white hover:[text-shadow:0_0_10px_#C7F000,0_0_20px_#C7F000] text-[30px] font-bold">
            Youngchul Portfolio
          </h2>
          <div className="flex-1 h-[3px] bg-[#C7F000] max-w-[700px]"></div>
        </div>
      </div>
 
    </div>
  );
};

export default Header;
