import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { motion } from "framer-motion";
const ProjectNode = ({ project, index }) => {
  const size = 6 + Math.random() * 4;
  const duration = 10 + Math.random() * 10;
  return /* @__PURE__ */ jsxDEV(
    motion.div,
    {
      className: "project-node absolute bg-black border-2 rounded-lg p-2 flex items-center justify-center text-center overflow-hidden",
      style: {
        width: `${size}rem`,
        height: `${size}rem`,
        top: `${10 + Math.random() * 80}%`,
        left: `${10 + Math.random() * 80}%`,
        animationDelay: `${index * 0.2}s`
      },
      whileHover: { scale: 1.1, zIndex: 10, boxShadow: "0 0 25px #f0f, 0 0 45px #f0f" },
      children: /* @__PURE__ */ jsxDEV("span", { className: "text-cyan-200 text-xs", children: project.title }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 20,
        columnNumber: 13
      })
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 9,
      columnNumber: 9
    }
  );
};
const ProjectVisualizer = ({ projects, onMerge, isLoading }) => {
  return /* @__PURE__ */ jsxDEV("div", { className: "relative w-full h-[60vh] lg:h-[70vh] rounded-lg border-2 border-cyan-500/50 bg-black/30 backdrop-blur-sm overflow-hidden flex items-center justify-center", children: [
    projects.map((p, i) => /* @__PURE__ */ jsxDEV(ProjectNode, { project: p, index: i }, p.id, false, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 9
    })),
    /* @__PURE__ */ jsxDEV("div", { className: "z-10 text-center", children: [
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: onMerge,
          disabled: isLoading,
          className: "glow-button relative bg-black border-2 border-cyan-400 text-cyan-300 font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-cyan-400 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed",
          children: isLoading ? /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("i", { className: "fas fa-spinner fa-spin mr-2" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 40,
              columnNumber: 21
            }),
            "FUSING..."
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 39,
            columnNumber: 17
          }) : /* @__PURE__ */ jsxDEV(Fragment, { children: [
            /* @__PURE__ */ jsxDEV("i", { className: "fas fa-atom mr-2" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 45,
              columnNumber: 21
            }),
            "INITIATE AI MERGE"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 44,
            columnNumber: 17
          })
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 33,
          columnNumber: 9
        }
      ),
      /* @__PURE__ */ jsxDEV("p", { className: "mt-4 text-sm text-neutral-400", children: "Selects 3 random projects to fuse" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 50,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 32,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 28,
    columnNumber: 5
  });
};
var stdin_default = ProjectVisualizer;
export {
  stdin_default as default
};
