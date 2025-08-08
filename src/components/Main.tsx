import { useState } from "react";
import Summary from "./Summary";
import Table from "./Table";

function Main() {
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <main className="lg:ml-8 ml-0 font-public">
      <div className="flex justify-between items-center">
        <div className="flex items-center lg:gap-3 gap-1">
          <div className="flex items-center gap-1">
            <h2 className="font-bold text-[#1B2528] lg:text-xl text-lg">
              Wallet Ledge
            </h2>
            <img src="/caret-down.svg" alt="arrow down" />
          </div>
          <div className="flex items-center bg-[rgb(56,103,118,0.16)] py-0.5 px-2 rounded-full gap-1.5">
            <img src="/Status Dot.svg" alt="status dot" />
            <p className="lg:text-[15px] text-sm text-[#1B2528]">Active</p>
          </div>
        </div>
        <div className="flex lg:gap-3 gap-1">
          <button
            type="button"
            className="bg-[#4B8B9F] text-[#020303] rounded-full px-4 lg:text-[15px] text-sm"
          >
            Share
          </button>
          <div className="border-[1.5px] border-[rgba(73,101,110,0.2)] rounded-full p-0.5">
            <img src="/div.svg" alt="three dots" />
          </div>
        </div>
      </div>
      {/* profile */}
      <div className="flex items-center gap-2 mt-5">
        <div className="flex -space-x-2">
          <img
            src="/Liam.png"
            alt="Liam"
            className="w-8 h-8 rounded-full ring-2 ring-white"
          />
          <img
            src="/Noah.png"
            alt="Noah"
            className="w-8 h-8 rounded-full ring-2 ring-white"
          />
          <img
            src="/Ava.png"
            alt="Ava"
            className="w-8 h-8 rounded-full ring-2 ring-white"
          />
          <img
            src="/Emma.png"
            alt="Emma"
            className="w-8 h-8 rounded-full ring-2 ring-white"
          />
        </div>
        <span className="text-[14px] text-[rgba(21,39,45,0.62)]">
          Ava, Liam, Noah +12 others
        </span>
      </div>

      {/* activeTab */}
      <div
        className="border-b-[1.5px] border-[#49656E]/[0.2]
        mb-6 font-Public mt-6"
      >
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-2 px-6 border-b-2 font-medium text-[15px] transition-colors cursor-pointer ${
              activeTab === "overview"
                ? "border-[#437D8E] text-[#437D8E]"
                : "border-transparent text-[#15272D]/[0.62] hover:text-[#15272D]/[0.62]"
            }`}
          >
            {" "}
            Overview
          </button>
          <button
            onClick={() => setActiveTab("transactions")}
            className={`py-2 px-1 border-b-2 font-medium text-[15px] transition-colors cursor-pointer  ${
              activeTab === "transactions"
                ? "border-[#437D8E] text-[#437D8E]"
                : "border-transparent text-[#15272D]/[0.62] hover:text-[#15272D]/[0.62]"
            }`}
          >
            Transactions
          </button>
        </div>
           
      </div>

      {/* summary */}
      <Summary />

      {/* TABLE */}
      <Table />
    </main>
  );
}

export default Main;
