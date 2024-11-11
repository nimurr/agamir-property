import { Link, Outlet } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import { FaRegUser } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

function App() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-32 mx-auto my-[250px]">
        <img
          className="w-full animate-pulse"
          src="https://res.cloudinary.com/nerob/image/upload/v1729153381/BongoBuy/vjrj5chnn35depdimlhs.gif"
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header section */}
      <header className="z-10">
        <Header />
      </header>

      {/* Main content: Outlet goes here */}
      <main className="flex-grow">
        <Outlet />
        <div className="fixed md:hidden bottom-0 w-full bg-white z-[9999] grid grid-cols-5 items-center justify-between py-3 sm:px-4 gap-3">
          <Link
            to={"/"}
            className="flex flex-col items-center text-sm cursor-pointer"
          >
            <IoHomeSharp className="text-xl text-primary" />
            <span>Home</span>
          </Link>
          <Link
            to={"/profile"}
            className="flex flex-col items-center text-sm cursor-pointer"
          >
            <FaRegUser className="text-xl text-primary" />
            <span>Account</span>
          </Link>
        </div>
      </main>

      {/* Footer section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
