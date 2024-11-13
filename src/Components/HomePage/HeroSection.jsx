import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("FLAT"); // Initially set to empty string

  return (
    <div className="mb-20">
      <div className="bg-[url('https://res.cloudinary.com/dwkqtskan/image/upload/v1731334531/Agamir_property/HomePage/jr4vsjh5rp2wnrn0b0kk.jpg')] min-h-[70vh] bg-cover bg-center relative">
        <div className="sm:min-h-[50vh] min-h-[40vh] w-full flex justify-center items-center">
          <div className="text-center sm:mt-10 mt-5 md:text-6xl text-3xl px-5 sm:px-0 font-semibold">
            <h2 className="text-[#7e9966] flex gap-5 items-end justify-center">
              Block A{" "}
              <span className="h-[1px] w-32 bg-[#6c7a60] block mt-2"></span>
            </h2>
            <h2 className="text-[#394231] my-5">BASHUNDHARA R/A</h2>
            <h2 className="text-[#7e9966] flex gap-5">
              <span className="h-[1px] w-32 bg-[#6c7a60] block mt-2"></span>{" "}
              Move to What Moves You
            </h2>
          </div>
        </div>
        <div className="mt-10 absolute w-full">
          <div className="p-4">
            {/* Tab Navigation */}
            <div className="flex justify-center">
              <button
                onClick={() => setActiveTab("FLAT")}
                className={`py-2 px-4 ${
                  activeTab === "FLAT"
                    ? "bg-primary text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                FLAT
              </button>
              <button
                onClick={() => setActiveTab("PLOT")}
                className={`py-2 px-4 ${
                  activeTab === "PLOT"
                    ? "bg-primary text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                PLOT
              </button>
            </div>

            {/* Conditionally render tab content */}
            {activeTab && (
              <div className="">
                {activeTab === "FLAT" && (
                  <div className="lg:w-5/12 mx-auto px-10 bg-gray-100 py-5 rounded-md flex flex-wrap gap-5 items-center justify-center">
                    <span className="flex items-center gap-2 p-2 rounded-md border-2 border-primary">
                      <MdOutlineHomeWork /> Flat Type
                    </span>
                    <span className="flex items-center gap-2 p-2 rounded-md border-2 border-primary">
                      <MdOutlineHomeWork /> Flat Type
                    </span>
                    <span className="flex items-center gap-2 p-2 rounded-md border-2 border-primary">
                      <MdOutlineHomeWork /> Flat Type
                    </span>
                    <button className="bg-primary flex items-center gap-1 p-2 rounded-md text-white">
                      <LuSearch />
                      Search
                    </button>
                  </div>
                )}
                {activeTab === "PLOT" && (
                  <div className="lg:w-5/12 mx-auto px-10 bg-gray-100 py-5 rounded-md flex flex-wrap gap-5 items-center justify-center">
                    <span className="flex items-center gap-2 p-2 rounded-md border-2 border-primary">
                      <MdOutlineHomeWork /> Plot Type
                    </span>
                    <span className="flex items-center gap-2 p-2 rounded-md border-2 border-primary">
                      <MdOutlineHomeWork /> Plot Type
                    </span>
                    <span className="flex items-center gap-2 p-2 rounded-md border-2 border-primary">
                      <MdOutlineHomeWork /> Plot Type
                    </span>
                    <button className="bg-primary flex items-center gap-1 p-2 rounded-md text-white">
                      <LuSearch />
                      Search
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
