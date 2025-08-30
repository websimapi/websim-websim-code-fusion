import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { motion } from "framer-motion";
const ColorPalette = ({ colors, selectedColor, onSelectColor }) => {
  return /* @__PURE__ */ jsxDEV("div", { className: "fixed bottom-0 left-0 right-0 p-4 z-20 flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-black/50 backdrop-blur-md p-2 rounded-xl border border-cyan-500/30 flex items-center justify-center gap-2 flex-wrap max-w-md", children: colors.map((color, index) => /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className: `w-10 h-10 rounded-full cursor-pointer border-2 border-transparent transition-transform duration-200 ${selectedColor === color ? "color-swatch-selected" : ""}`,
      style: { backgroundColor: color },
      onClick: () => onSelectColor(color),
      whileHover: { scale: 1.15 },
      whileTap: { scale: 0.9 },
      transition: { duration: 0.1 }
    },
    color,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 21
    }
  )) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 7,
    columnNumber: 13
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 6,
    columnNumber: 9
  });
};
var stdin_default = ColorPalette;
export {
  stdin_default as default
};
