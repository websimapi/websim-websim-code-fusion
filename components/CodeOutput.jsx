import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const CodeOutput = ({ code, isLoading }) => {
  return /* @__PURE__ */ jsxDEV("div", { className: "border-2 border-cyan-500/50 bg-black/30 backdrop-blur-sm p-4 rounded-lg h-52 flex flex-col", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-cyan-300 mb-3 flex-shrink-0", children: [
      /* @__PURE__ */ jsxDEV("i", { className: "fas fa-cogs mr-2" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 8,
        columnNumber: 17
      }),
      "AI Output"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 7,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "w-full h-full bg-black/50 rounded p-2 overflow-auto relative", children: /* @__PURE__ */ jsxDEV(AnimatePresence, { children: /* @__PURE__ */ jsxDEV(
      motion.pre,
      {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 },
        className: "text-sm whitespace-pre-wrap",
        children: /* @__PURE__ */ jsxDEV("code", { children: code }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 20,
          columnNumber: 25
        })
      },
      code,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 12,
        columnNumber: 21
      }
    ) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 11,
      columnNumber: 17
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 6,
    columnNumber: 9
  });
};
var stdin_default = CodeOutput;
export {
  stdin_default as default
};
