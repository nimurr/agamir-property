import { MdStreetview } from "react-icons/md";
import SectionHeader from "../Common/SectionHeader";

export default function WorkingProcess() {

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto lg:my-20 my-10 sm:pt-0 pt-10">
      <SectionHeader state="Our Easy working process"></SectionHeader>
      <div className="grid xl:grid-cols-2 lg:gap-10 gap-5 my-10">
        <div className="">
          <img
            className="w-full rounded-xl"
            src="https://res.cloudinary.com/dwkqtskan/image/upload/v1731342479/Agamir_property/HomePage/y39x1mcfu2dgw9zviasd.png"
            alt=""
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-5 ">
          <div className="bg-gray-100 rounded-md ">
            <span className="text-left w-10 flex justify-center items-center h-10 rounded-md bg-primary text-white">
              1
            </span>
            <div className="w-20 h-20 bg-[#FEEEB0] rounded-full flex justify-center items-center mx-auto">
              <MdStreetview className="text-3xl text-primary" />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-gray-700 my-2 text-2xl">Visit Land</h2>
              <p className="text-sm text-gray-700">
                First visit the plot of your choice and know the details about
                the plot
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md ">
            <span className="text-left w-10 flex justify-center items-center h-10 rounded-md bg-primary text-white">
              1
            </span>
            <div className="w-20 h-20 bg-[#FEEEB0] rounded-full flex justify-center items-center mx-auto">
              <MdStreetview className="text-3xl text-primary" />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-gray-700 my-2 text-2xl">Visit Land</h2>
              <p className="text-sm text-gray-700">
                First visit the plot of your choice and know the details about
                the plot
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md ">
            <span className="text-left w-10 flex justify-center items-center h-10 rounded-md bg-primary text-white">
              1
            </span>
            <div className="w-20 h-20 bg-[#FEEEB0] rounded-full flex justify-center items-center mx-auto">
              <MdStreetview className="text-3xl text-primary" />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-gray-700 my-2 text-2xl">Visit Land</h2>
              <p className="text-sm text-gray-700">
                First visit the plot of your choice and know the details about
                the plot
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md ">
            <span className="text-left w-10 flex justify-center items-center h-10 rounded-md bg-primary text-white">
              1
            </span>
            <div className="w-20 h-20 bg-[#FEEEB0] rounded-full flex justify-center items-center mx-auto">
              <MdStreetview className="text-3xl text-primary" />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-gray-700 my-2 text-2xl">Visit Land</h2>
              <p className="text-sm text-gray-700">
                First visit the plot of your choice and know the details about
                the plot
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
