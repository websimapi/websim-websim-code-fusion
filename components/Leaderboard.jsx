import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { useQuery } from "@websim/use-query";
import { room } from "../app.jsx";
import { motion } from "framer-motion";
const Leaderboard = () => {
  const { data: leaders, loading } = useQuery((room2) => room2.query(`
        SELECT c.id, c.score, u.username 
        FROM public.contributions_v1 c 
        JOIN public.user u ON c.id = u.id 
        ORDER BY c.score DESC 
        LIMIT 5
    `));
  return /* @__PURE__ */ jsxDEV("div", { className: "border-2 border-cyan-500/50 bg-black/30 backdrop-blur-sm p-4 rounded-lg", children: [
    /* @__PURE__ */ jsxDEV("h2", { className: "text-xl font-bold text-cyan-300 mb-3 text-center", children: [
      /* @__PURE__ */ jsxDEV("i", { className: "fas fa-trophy mr-2" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 18,
        columnNumber: 17
      }),
      "Top Conductors"
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 17,
      columnNumber: 13
    }),
    loading && /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: "Loading..." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 20,
      columnNumber: 25
    }),
    /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: leaders && leaders.map((leader, index) => /* @__PURE__ */ jsxDEV(
      motion.li,
      {
        className: "flex items-center justify-between bg-cyan-900/30 p-2 rounded",
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.3, delay: index * 0.1 },
        children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-cyan-400 w-6", children: [
              "#",
              index + 1
            ] }, void 0, true, {
              fileName: "<stdin>",
              lineNumber: 31,
              columnNumber: 29
            }),
            /* @__PURE__ */ jsxDEV("img", { src: `https://images.websim.com/avatar/${leader.username}`, className: "w-8 h-8 rounded-full", alt: leader.username }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 32,
              columnNumber: 29
            }),
            /* @__PURE__ */ jsxDEV("a", { href: `https://websim.com/@${leader.username}`, target: "_blank", rel: "noopener noreferrer", className: "hover:underline", children: leader.username }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 33,
              columnNumber: 29
            })
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 30,
            columnNumber: 25
          }),
          /* @__PURE__ */ jsxDEV("span", { className: "font-bold text-white", children: [
            leader.score,
            " merges"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 35,
            columnNumber: 25
          })
        ]
      },
      leader.id,
      true,
      {
        fileName: "<stdin>",
        lineNumber: 23,
        columnNumber: 21
      }
    )) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 21,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 16,
    columnNumber: 9
  });
};
var stdin_default = Leaderboard;
export {
  stdin_default as default
};
