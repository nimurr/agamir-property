import axios from "axios";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
export default function FooterMain() {
  const [settingInfo, setSettingInfo] = useState([]);
  console.log(settingInfo);

  useEffect(() => {
    axios.get("http://localhost:5000/site-settings").then((res) => {
      if (res?.data) setSettingInfo(res?.data);
    });
  }, []);

  return (
    <div>
      <footer className="bg-primary text-white">
        <div className="lg:w-[90%] w-[95%] mx-auto">
          <div className="grid sm:grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">
                About Company
              </h2>
              <span className="self-center whitespace-nowrap text-xl font-semibold ">
                Agamir <span className="text-xs">Property</span>
              </span>
              <p className="dark:text-white mt-5 ">
                Elevate Your Style with mohasagor.com- Unleash the latest
                fashion trends at your fingertips. Discover curated collections,
                timeless pieces, and exclusive designs that redefine your
                wardrobe.
              </p>
              <p className="dark:text-white text-sm mt-2">
                Email : sopnerpesha24@gmail.com
              </p>
              <p className="dark:text-white text-sm mt-2">
                Address : Mirpur-11 , Dhaka-1216 , Bangladesh
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">
                Help center
              </h2>
              <ul className=" dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    target="_blank"
                    to={
                      "https://www.facebook.com/profile.php?id=61564583527835"
                    }
                    className="hover:underline hover:text-black"
                  >
                    FaceBook
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    target="_blank"
                    to={`https://api.whatsapp.com/send/?phone=%2B88${settingInfo[0]?.wpNumber}&text&type=phone_number&app_absent=0`}
                    className="hover:underline hover:text-black"
                  >
                    WhatsApp
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    to={"/contact-us"}
                    className="hover:underline hover:text-black"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase dark:text-white">
                Our Services
              </h2>
              <ul className=" dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to={"/about-us"}
                    className="hover:underline hover:text-black"
                  >
                    High-quality Goods
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/about-us"}
                    className="hover:underline hover:text-black"
                  >
                    24/7 Live chat
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/about-us"}
                    className="hover:underline hover:text-black"
                  >
                    Express Shipping
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to={"/about-us"}
                    className="hover:underline hover:text-black"
                  >
                    Secure Payment
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                Download
              </h2>
              <ul className=" dark:text-gray-400 font-medium">
                <li className="mb-4 hover:text-black">
                  <a
                    href="#"
                    className="hover:underline flex items-start gap-3"
                  >
                    Our Android App
                    <img
                      className="w-8"
                      src="https://res.cloudinary.com/nerob/image/upload/v1729072597/itg4lbho6byww0p73afv.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h2 className="dark:text-white font-semibold text-xl mb-2">Email</h2>
              <input className="p-2 rounded bg-transparent dark:text-white" type="email" placeholder="Your Email" name="email" />
              <button className="bg-gradient-primary mt-2 py-2 px-5 rounded text-white">Subscribe</button>
            </div> */}
          </div>

          <div className="px-4 py-6 bg-blue-800 flex items-center justify-center">
            <span className="text-sm text-white sm:text-center">
              © 2023 <a href="https://flowbite.com/">SopnerPesha™</a>. All
              Rights Reserved. Created By{" "}
              <span className="font-bold text-white">
                Nimur Rahman Nerob
              </span>
            </span>
          </div>
        </div>
      </footer>
      <br className="md:hidden" />
    </div>
  );
}
