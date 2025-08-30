import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useMemo, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { WebsimSocket, RoomProvider, useQuery } from "@websim/use-query";
import Canvas from "./components/Canvas.jsx";
import ColorPalette from "./components/ColorPalette.jsx";
const room = new WebsimSocket();
const COLORS = [
  "#FFFFFF",
  "#C2C2C2",
  "#858585",
  "#474747",
  "#000000",
  "#FF5A5A",
  "#FF965A",
  "#FFFF5A",
  "#96FF5A",
  "#5AFF96",
  "#5AFFFF",
  "#5A96FF",
  "#965AFF",
  "#FF5AFF"
];
function App() {
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const { data: pixels, loading } = useQuery(room.collection("pixels_v1"));
  const pixelsMap = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    if (pixels) {
      for (const pixel of pixels) {
        map.set(`${pixel.x}:${pixel.y}`, pixel.color);
      }
    }
    return map;
  }, [pixels]);
  const handleSetPixel = useCallback(async (x, y) => {
    const id = `${x}:${y}`;
    const currentColor = pixelsMap.get(id);
    if (currentColor === selectedColor) return;
    try {
      await room.collection("pixels_v1").upsert({
        id,
        x,
        y,
        color: selectedColor
      });
    } catch (error) {
      console.error("Failed to set pixel:", error);
    }
  }, [selectedColor, pixelsMap]);
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen w-screen flex flex-col items-center justify-center p-4 relative touch-none overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 text-center z-20 pointer-events-none", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-6xl font-bold text-cyan-300", style: { textShadow: "0 0 10px cyan" }, children: "Collaborative Canvas" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("p", { className: "text-neutral-400 max-w-2xl", children: "Click to place a pixel. Pan and pinch to zoom." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 49,
      columnNumber: 9
    }, this),
    loading ? /* @__PURE__ */ jsxDEV("div", { className: "flex items-center text-2xl text-cyan-300", children: [
      /* @__PURE__ */ jsxDEV("i", { className: "fas fa-spinner fa-spin mr-3" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      " Loading Canvas..."
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 57,
      columnNumber: 13
    }, this) : /* @__PURE__ */ jsxDEV(Canvas, { pixels: pixelsMap, onSetPixel: handleSetPixel }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV(
      ColorPalette,
      {
        colors: COLORS,
        selectedColor,
        onSelectColor: setSelectedColor
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 64,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
const root = createRoot(document.getElementById("root"));
root.render(
  /* @__PURE__ */ jsxDEV(RoomProvider, { room, children: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 76,
    columnNumber: 9
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 75,
    columnNumber: 5
  })
);
export {
  room
};
