import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useRef } from "react";
import { motion } from "framer-motion";
const GRID_SIZE = 50;
const PIXEL_SIZE = 20;
const Pixel = React.memo(({ x, y, color, onSetPixel }) => {
  return /* @__PURE__ */ jsxDEV(
    "div",
    {
      className: "absolute border-r border-b border-neutral-800",
      style: {
        left: x * PIXEL_SIZE,
        top: y * PIXEL_SIZE,
        width: PIXEL_SIZE,
        height: PIXEL_SIZE,
        backgroundColor: color || "transparent"
      },
      onClick: () => onSetPixel(x, y)
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 9
    }
  );
});
const Canvas = ({ pixels, onSetPixel }) => {
  const constraintsRef = useRef(null);
  const canvasWidth = GRID_SIZE * PIXEL_SIZE;
  const canvasHeight = GRID_SIZE * PIXEL_SIZE;
  const pixelElements = [];
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      const color = pixels.get(`${x}:${y}`);
      pixelElements.push(
        /* @__PURE__ */ jsxDEV(
          Pixel,
          {
            x,
            y,
            color,
            onSetPixel
          },
          `${x}-${y}`,
          false,
          {
            fileName: "<stdin>",
            lineNumber: 33,
            columnNumber: 17
          }
        )
      );
    }
  }
  return /* @__PURE__ */ jsxDEV("div", { ref: constraintsRef, className: "w-full h-full flex items-center justify-center overflow-hidden", children: /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className: "relative cursor-pointer bg-neutral-900 border-2 border-cyan-500/50",
      style: { width: canvasWidth, height: canvasHeight },
      drag: true,
      dragConstraints: constraintsRef,
      whileTap: { cursor: "grabbing" },
      whileHover: { scale: 1.01 },
      children: pixelElements
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 46,
      columnNumber: 13
    }
  ) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 45,
    columnNumber: 9
  });
};
var stdin_default = Canvas;
export {
  stdin_default as default
};
