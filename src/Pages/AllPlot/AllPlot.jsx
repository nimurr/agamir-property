import { CiHeart, CiShare2 } from "react-icons/ci";
import { FaCaretRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { GrMultiple } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { TbHomeSearch } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function AllPlot() {
    return (
        <div className="">
            <div className="my-10 border-primary overflow-hidden border-t-2 border-b-2  py-6">
                <form action="" className="lg:w-[90%] w-[95%] mx-auto flex flex-wrap gap-5 justify-center">
                    <select
                        id="options"
                        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 max-w-48"
                    >
                        <option defaultValue="Plot Type">Plot Type</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                        <option value="5">Option 5</option>
                    </select>
                    <select
                        id="options"
                        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 max-w-48"
                    >
                        <option defaultValue="Katha">Katha</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                        <option value="5">Option 5</option>
                    </select>
                    <select
                        id="options"
                        className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 max-w-48"
                    >
                        <option defaultValue="Block">Block</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        <option value="4">Option 4</option>
                        <option value="5">Option 5</option>
                    </select>
                    <button type="submit" className="bg-primary min-w-48 justify-center flex items-center gap-1 p-2 rounded-md text-white">
                        <LuSearch />
                        Search
                    </button>
                </form>
            </div>
            <div className="grid xl:grid-cols-3 gap-10 lg:w-[90%] w-[95%] mx-auto my-10">
                <div className="xl:col-span-2 flex flex-col gap-10">

                    {[...Array(5)].map((_, idx) => (
                        <Link to={'/all-plot/:id'} key={idx} className=" grid xl:grid-cols-2 border-[2px] rounded-lg overflow-hidden border-primary ">
                            <div>
                                <img className="w-full" src="https://res.cloudinary.com/dwkqtskan/image/upload/v1731604771/Agamir_property/All_Plot/kkrucfwhhx1d7d5mpwp0.png" alt="" />
                            </div>
                            <div className="sm:p-6 p-4 sm:pl-10 pl-4 bg-blue-200">
                                <h2 className="text-2xl font-semibold text-primary"><span className="text-sm mr-2">BDT</span>2.99 Core</h2>
                                <p className="my-3 text-xl ">Ready For construction, South Facing Plot, with
                                    file transfer</p>
                                <div className="flex gap-3 my-8">
                                    <div className="border-r-2 border-primary sm:px-3 px-1">
                                        <RiCheckboxMultipleBlankLine className="text-primary text-xl" />
                                        <span className="mt-2 block">M Block</span>
                                    </div>
                                    <div className="border-r-2 border-primary sm:px-3 px-1">
                                        <GrMultiple className="text-primary text-xl" />
                                        <span className="mt-2 block">5 Katha</span>
                                    </div>
                                    <div className="px-3">
                                        <TbHomeSearch className="text-primary text-xl" />
                                        <span className="mt-2 block">ID:23678</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-between">
                                    <div className="flex items-center gap-2">
                                        <button className="flex items-center gap-1 bg-primary py-1 px-5 text-white rounded-md"><FaPhoneFlip className="rotate-90" /> Call</button>
                                        <button className="flex items-center gap-1 bg-primary py-1 px-5 text-white rounded-md">Email <FaChevronLeft /> </button>
                                    </div>
                                    <div className="flex text-3xl">
                                        <CiHeart className="cursor-pointer" />
                                        <CiShare2 className="cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
                <div className="xl:col-span-1">
                    <h2 className="flex items-center justify-between bg-primary py-2 px-5 text-white text-xl">Plot sale <FaChevronRight /></h2>
                    <div className="mt-5">
                        <h2 className="flex items-center justify-between bg-gray-200 py-2 px-5  text-xl">Plot Type</h2>
                        <ul className="mt-5">
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Residential</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Apartment</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Apartment</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Apartment</li>
                        </ul>
                    </div>
                    <div className="mt-10">
                        <h2 className="flex items-center justify-between bg-gray-200 py-2 px-5  text-xl">Block</h2>
                        <ul className="mt-5">
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Block M</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Block N</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Block H</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Block L</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Block B</li>
                        </ul>
                    </div>
                    <div className="mt-10">
                        <h2 className="flex items-center justify-between bg-gray-200 py-2 px-5  text-xl">Katha</h2>
                        <ul className="mt-5">
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Katha 10</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Katha 5</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Katha 8</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Katha 3</li>
                            <li className="flex items-center gap-2 text-primary my-2 cursor-pointer hover:ml-2 duration-300"><FaCaretRight className="text-black" />Katha 9</li>
                        </ul>
                    </div>
                    <div className="flex justify-end">
                        <button className="flex items-center gap-1 bg-primary py-1 px-5 mt-5 text-white rounded-md"><FaPhoneFlip className="rotate-90" /> Call</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
