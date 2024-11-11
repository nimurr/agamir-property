import {  Navbar } from "flowbite-react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-primary">
      <Navbar className="bg-transparent lg:w-[90%] w-[95%] mx-auto">
        <Navbar.Brand href="#">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex gap-2 items-center md:order-2">
          <button className="bg-yellow-400 py-3 sm:px-10 px-5 rounded-md">
            Sell property{" "}
            <span className="bg-blue-700 text-white px-1 ml-1 rounded-md">
              Free
            </span>
          </button>
          <FaUserCircle className="text-white text-4xl cursor-pointer" />

          <Navbar.Toggle className="text-white active:text-black focus:text-black" />
        </div>
        <Navbar.Collapse className="text-white">
          <NavLink to={'/'} >
            Home
          </NavLink>
          <NavLink to={'/'} >New Properties</NavLink>
          <NavLink to={'/'} >Blog</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
