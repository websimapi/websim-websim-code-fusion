import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { WebsimSocket } from "@websim/websim-socket";
import ProjectVisualizer from "./components/ProjectVisualizer.jsx";
import Leaderboard from "./components/Leaderboard.jsx";
import CodeOutput from "./components/CodeOutput.jsx";
const room = new WebsimSocket();
function App() {
  const [projects, setProjects] = useState([]);
  const [mergedCode, setMergedCode] = useState("// AI-generated code will appear here...");
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`https://websim.ai/api/v1/projects/trending`);
        const data = await response.json();
        setProjects(data.data.slice(0, 20));
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    }
    async function getUser() {
      const user = await window.websim.getCurrentUser();
      setCurrentUser(user);
    }
    fetchProjects();
    getUser();
  }, []);
  const handleMerge = async () => {
    if (isLoading || projects.length < 3) return;
    setIsLoading(true);
    setMergedCode("// Analyzing project vectors... Fusing concepts...");
    const projectsToMerge = [...projects].sort(() => 0.5 - Math.random()).slice(0, 3);
    const projectTitles = projectsToMerge.map((p) => p.title).join(", ");
    try {
      const completion = await websim.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `You are a futuristic AI that merges software project ideas. Given a list of project titles, create a new, innovative project concept. Respond in JSON format with a "newName" (a creative, catchy name for the new project), an "emoji", and a "codeSnippet" (a simple, thematic javascript code snippet, like a function definition). The response must be only the JSON object.`
          },
          {
            role: "user",
            content: projectTitles
          }
        ],
        json: true
      });
      const result = JSON.parse(completion.content);
      const formattedCode = `// Fusion successful: ${result.emoji} ${result.newName}

${result.codeSnippet}`;
      setMergedCode(formattedCode);
      if (currentUser) {
        const currentState = await room.collection("contributions_v1").filter({ id: currentUser.id }).getList();
        const currentScore = currentState.length > 0 ? currentState[0].score : 0;
        await room.collection("contributions_v1").upsert({
          id: currentUser.id,
          score: currentScore + 1
        });
      }
    } catch (error) {
      console.error("AI merge failed:", error);
      setMergedCode("// AI fusion failed. Quantum entanglement unstable.");
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen flex flex-col items-center justify-center p-4 relative", children: [
    /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-6xl font-bold text-cyan-300 mb-4", style: { textShadow: "0 0 10px cyan" }, children: "Websim Code Fusion" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 86,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("p", { className: "text-center mb-8 text-neutral-400 max-w-2xl", children: "The endless stream of Websim projects is constantly analyzed and merged by a central AI. You are its conductor." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxDEV(ProjectVisualizer, { projects, onMerge: handleMerge, isLoading }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 91,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 90,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxDEV(CodeOutput, { code: mergedCode, isLoading }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 94,
          columnNumber: 18
        }, this),
        /* @__PURE__ */ jsxDEV(Leaderboard, {}, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 95,
          columnNumber: 18
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 93,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 89,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 103,
  columnNumber: 13
}));
export {
  room
};
