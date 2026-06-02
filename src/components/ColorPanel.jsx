import { useContext } from "react";
import { PiPaintBrushBold } from "react-icons/pi";
import { Data } from "../context/Store";

const COLORS = [
    { label: "Violet",  value: "#7C3AED" },
    { label: "Sky",     value: "#0284C7" },
    { label: "Emerald", value: "#059669" },
    { label: "Amber",   value: "#D97706" },
    { label: "Fuchsia", value: "#C026D3" },
    { label: "Indigo",  value: "#4338CA" },
];

export const ColorPanel = () => {

    const {paletteOpen,btnColor,setBtnColor,setPaletteOpen} = useContext(Data)

    return(
        <>
        
  {/* ── Color Palette Panel ── */}
  <div
  className="fixed hidden md:flex left-0 top-[35%] -translate-y-1/2 z-50  items-start"
  style={{ pointerEvents: "none" }}
>
<div
  className="overflow-hidden transition-[width,opacity] bg-white shadow-sm duration-500 ease-in-out"
  style={{
    width: paletteOpen ? "200px" : "0px",
    opacity: paletteOpen ? 1 : 0,
    pointerEvents: paletteOpen ? "auto" : "none",
  }}
>
  <div className="w-[200px]">
    <h1 className="text-[20px] font-small py-2 px-4 whitespace-nowrap">Select Your Choice</h1>
    <div className="grid grid-cols-3 grid-rows-2 gap-2 py-4 px-3">
      {COLORS.map((color) => (
        <button
          key={color.value}
          title={color.label}
          onClick={() => setBtnColor(color.value)}
          className="w-10 h-10 rounded-full border-2 cursor-pointer transition-transform duration-200 hover:scale-110"
          style={{
            backgroundColor: color.value,
            borderColor: btnColor === color.value ? "#111" : "transparent",
            boxShadow: btnColor === color.value ? `0 0 0 2px ${color.value}55` : "none",
          }}
        />
      ))}
    </div>
  </div>
</div>
  <button
    onClick={() => setPaletteOpen((v) => !v)}
    className="flex items-center justify-center shadow-sm p-3  bg-white cursor-pointer transition-all duration-300"
    style={{
      pointerEvents: "auto",
    }}
    title="Toggle color palette"
  >
    <PiPaintBrushBold className="text-black text-[20px]" />
  </button>
</div>

        </>
    )
}