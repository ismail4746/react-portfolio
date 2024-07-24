import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import htmlLogo from "../assets/html.svg";
import nodejsLogo from "../assets/nodejs.svg";
import pythonLogo from "../assets/python.svg";
import mongodbLogo from "../assets/mongodb.svg";
import javascriptLogo from "../assets/javascript.svg";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="text-slate-400 my-20 text-4xl flex justify-center items-center font-semibold">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={htmlLogo} alt="HTML Logo" className="w-20 h-20" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={nodejsLogo} alt="Node.js Logo" className="w-20 h-20" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={pythonLogo} alt="Python Logo" className="w-20 h-20" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={mongodbLogo} alt="MongoDB Logo" className="w-20 h-20" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <img src={javascriptLogo} alt="JavaScript Logo" className="w-20 h-20" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
