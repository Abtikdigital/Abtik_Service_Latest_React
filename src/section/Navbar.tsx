/*

 
      <div className="hidden md:flex justify-between  px-14 items-center py-2.5  shadow-xl ">
        <div className="">
          <img src={Logo} className=" h-14 " />
        </div>
        <ul
          className="flex h-full justify-around items-center gap-5   "
          style={{
            fontFamily: "Montserrat Alternates",
          }}
        >
          <Link
            to={"/"}
            className={`cursor-pointer transition-all py-2.5 group relative flex justify-center items-center    text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300
          ${
            currentPath == " " ||
            (currentPath == "/" && "!text-[#010574] !font-bold")
          }
          `}
          >
            Home
            <div
              className={`absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574] ${
                currentPath == " " || (currentPath == "/" && "!w-full !h-1")
              }`}
            ></div>
          </Link>
          <Link
            to={"/about"}
            className="cursor-pointer transition-all group relative py-2.5  text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300"
          >
            About
            <div className="absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574]"></div>
          </Link>
          <Link
            to={"services"}
            className="cursor-pointer transition-all group relative py-2.5  text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300"
          >
            Service
            <div className="absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574]"></div>
          </Link>
          <Link
            to={"/career"}
            className="cursor-pointer transition-all group relative py-2.5  text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300"
          >
            Career
            <div className="absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574]"></div>
          </Link>
          <Link
            to={"/blog"}
            className="cursor-pointer relative group transition-all py-2.5 text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300"
          >
            Blog
            <div className="absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574]"></div>
          </Link>
          <Link
            to={"/contact"}
            className="cursor-pointer relative group transition-all py-2.5 text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300"
          >
            Contact
            <div className="absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574]"></div>
          </Link>
        </ul>
        <div>
          <button
            className="custom-btn"
            style={{
              fontFamily: "Montserrat Alternates",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
*/

import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Logo from "../assets/Logo/Blue.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isCertificationOpen, setIsCertificationOpen] = useState(false);
  const [isLoanOpen, setIsLoanOpen] = useState(false);
  const [isFundingOpen, setIsFundingOpen] = useState(false);
  const pathname = useLocation().pathname;
  const [currentPath, setCurrentPath] = useState<any>();
  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleService = () => {
    setIsServiceOpen(!isServiceOpen);
  };
  const toggleCertification = () => {
    setIsCertificationOpen(!isCertificationOpen);
  };
  const toggleFunding = () => {
    setIsFundingOpen(!isFundingOpen);
  };
  const toggleLoan = () => {
    setIsLoanOpen(!isLoanOpen);
  };
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between  sticky top-0 z-50 bg-white px-14 items-center py-2.5  shadow-xl ">
        <div className="">
          <img src={Logo} className=" h-14 " />
        </div>
        <ul
          className="flex h-full justify-around items-center gap-5   "
          style={{
            fontFamily: "Montserrat Alternates",
          }}
        >
          <Link
            to={"/"}
            className={`cursor-pointer transition-all py-2.5 group relative flex justify-center items-center    text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300
          ${
            currentPath == " " ||
            (currentPath == "/" && "!text-[#010574] !font-bold")
          }
          `}
          >
            Home
            <div
              className={`absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574] ${
                currentPath == " " || (currentPath == "/" && "!w-full !h-1")
              }`}
            ></div>
          </Link>
          <Link
            to={"/about"}
            className="cursor-pointer transition-all group relative py-2.5  text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300"
          >
            About
            <div className="absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574]"></div>
          </Link>
          <Link
            to={"services"}
            className="cursor-pointer transition-all group relative py-2.5  text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300"
          >
            Service
            <div className="absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574]"></div>
          </Link>
          <Link
            to={"/career"}
            className="cursor-pointer transition-all group relative py-2.5  text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300"
          >
            Career
            <div className="absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574]"></div>
          </Link>
          <Link
            to={"/blog"}
            className="cursor-pointer relative group transition-all py-2.5 text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300"
          >
            Blog
            <div className="absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574]"></div>
          </Link>
          <Link
            to={"/contact"}
            className="cursor-pointer relative group transition-all py-2.5 text-[#A4A4A4] hover:text-[#010574] hover:font-bold duration-300"
          >
            Contact
            <div className="absolute rounded-lg w-0  group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#100574]"></div>
          </Link>
        </ul>
        <div>
          <button
            className="custom-btn"
            style={{
              fontFamily: "Montserrat Alternates",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className=" md:hidden sticky top-0 z-50 bg-white">
        <div className="relative py-2 flex  items-center">
          <img src={Logo} className="h-14 px-8" />
          <button
            className=" absolute right-5  border border-gray-400 rounded-sm p-1 transition-all duration-300"
            onClick={toggleNavbar}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isOpen && (
          <ul className="flex flex-col  space-y-3 px-8  p-6">
            <Link
              to={"/"}
              className="border rounded-md  p-1 text-center bg-white"
            >
              Home
            </Link>
            <Link
              to={"/"}
              className="border rounded-md  p-1 text-center bg-white"
            >
              About
            </Link>
            <Link
              to={"/"}
              className="border rounded-md  p-1 text-center bg-white relative flex justify-center items-center"
              onClick={toggleService}
            >
              Service
              {!isServiceOpen ? (
                <ChevronDown className="absolute right-0 h-5" />
              ) : (
                <ChevronUp className="absolute right-0 h-5" />
              )}
            </Link>
            {isServiceOpen && (
              <ul className="flex flex-col  space-y-3 px-8  p-2">
                <Link
                  to={"/"}
                  onClick={toggleCertification}
                  className="border rounded-md  p-1 text-center bg-white relative flex justify-center items-center"
                >
                  Certification
                  {isCertificationOpen ? (
                    <ChevronDown className="absolute right-0 h-5" />
                  ) : (
                    <ChevronUp className="absolute right-0 h-5" />
                  )}
                </Link>
                {isCertificationOpen && (
                  <ul className="px-4">
                    <Link
                      to={"/"}
                      className="border rounded-md  p-1 text-center bg-white relative flex justify-center items-center"
                    >
                      Startup India
                    </Link>
                  </ul>
                )}
                <Link
                  to={"/"}
                  onClick={toggleLoan}
                  className="border rounded-md  p-1 text-center bg-white relative flex justify-center  items-center"
                >
                  Loan
                  {isLoanOpen ? (
                    <ChevronDown className="absolute right-0 h-5" />
                  ) : (
                    <ChevronUp className="absolute right-0 h-5" />
                  )}
                </Link>{" "}
                {isLoanOpen && (
                  <ul className="px-8">
                    <Link
                      to={"/"}
                      className="border rounded-md  p-1 text-center bg-white relative flex justify-center items-center"
                    >
                      Startup India
                    </Link>
                  </ul>
                )}
                <Link
                  to={"/"}
                  onClick={toggleFunding}
                  className="border rounded-md  p-1 text-center bg-white relative flex justify-center items-center"
                >
                  Funding
                  {isFundingOpen ? (
                    <ChevronDown className="absolute right-0 h-5" />
                  ) : (
                    <ChevronUp className="absolute right-0 h-5" />
                  )}
                </Link>
                {isFundingOpen && (
                  <ul className="px-8">
                    <Link
                      to={"/"}
                      className="border rounded-md  p-1 text-center bg-white relative flex justify-center items-center"
                    >
                      Startup India
                    </Link>
                  </ul>
                )}
              </ul>
            )}
            <Link
              to={"/"}
              className="border rounded-md  p-1 text-center bg-white"
            >
              Contact
            </Link>
            <Link
              to={"/"}
              className="border rounded-md  p-1 text-center bg-white"
            >
              Blog
            </Link>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
