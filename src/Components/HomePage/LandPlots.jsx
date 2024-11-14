import { GrMultiple } from "react-icons/gr";
import SectionHeader from "../Common/SectionHeader";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TbHomeSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function LandPlots() {
  return (
    <div className="lg:w-[90%] w-[95%] mx-auto lg:my-20 my-10">
      <SectionHeader state="Exclusive Land Plots"></SectionHeader>
      <div className="my-10 grid xl:grid-cols-3 md:grid-cols-2 gap-10">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="border-primary border-2 rounded-md overflow-hidden"
          >
            <img
              src="https://res.cloudinary.com/dwkqtskan/image/upload/v1731343858/Agamir_property/HomePage/vzpxhj8yhwkywdzmnd0x.jpg"
              alt=""
            />
            <div className="sm:px-5 px-2 pb-3">
              <h2 className="my-5 text-2xl text-primary">
                Ready For Construction South Facing Plot
              </h2>
              <div className="flex justify-between">
                <div className="border-r-2 border-primary sm:px-3 px-1">
                  <RiCheckboxMultipleBlankLine className="text-primary text-xl" />
                  <span className="mt-2 block">M Block</span>
                </div>
                <div className="border-r-2 border-primary sm:px-3 px-1">
                  <GrMultiple className="text-primary text-xl" />
                  <span className="mt-2 block">5 Katha</span>
                </div>
                <div className="border-r-2 border-primary sm:px-3 px-1">
                  <FaBangladeshiTakaSign className="text-primary text-xl" />
                  <span className="mt-2 block">2.55 Core</span>
                </div>
                <div className="px-3">
                  <TbHomeSearch className="text-primary text-xl" />
                  <span className="mt-2 block">ID:23678</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={'/all-plot'} className="text-center w-48 py-2 rounded-md bg-primary  text-white">
          More Plot ... 
        </Link>
      </div>
    </div>
  );
}
