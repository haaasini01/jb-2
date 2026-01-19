import logo from "../assets/JBlogo.png";

function JB({ size = "nav" }) {
  const logoSize =
    size === "footer"
      ? "h-7 sm:h-8 md:h-9"   // ✅ smaller in footer
      : "h-10 sm:h-12 md:h-14"; // ✅ bigger in navbar

  const titleSize =
    size === "footer"
      ? "text-base sm:text-lg md:text-xl"
      : "text-lg sm:text-xl md:text-2xl";

  const subtitleSize =
    size === "footer"
      ? "text-[10px] sm:text-xs md:text-sm"
      : "text-xs sm:text-sm md:text-base";

  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Jayess Bauences Logo"
        className={`${logoSize} w-auto`}
      />

      <div className="leading-none">
        <div className={`${titleSize} font-bold bg-linear-to-b from-[#E6C550] to-[#C1A232] bg-clip-text text-transparent`}>
          JAYESS BAUENCES
        </div>
        <div className={`${subtitleSize} tracking-[.23em] font-normal text-[#d3d0cb] leading-tight`}>
          INTERIOR DESIGNERS
        </div>
      </div>
    </div>
  );
}

export default JB;