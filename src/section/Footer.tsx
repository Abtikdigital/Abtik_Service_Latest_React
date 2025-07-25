import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/Logo/Blue.png";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="grid  grid-cols-1 lg:grid-cols-4 space-y-5 px-7 md:px-14 py-6 md:py-10 bg-[#F7F7F7]"
      style={{fontFamily:"Montserrat Alternates"}}>
        <div className="space-y-5">
          <div>
            <img src={Logo} className="h-14" />
          </div>
          <h2 className="paragraph">
            ©2025abtikservices - All rights reserved.
          </h2>
          <div className="flex gap-2">
            <button className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg ">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-white "
                size="xl"
              />
            </button>
            <button className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg ">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white "
                size="xl"
              />
            </button>
            <button className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg ">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white "
                size="xl"
              />
            </button>
          </div>
        </div>
        <div>
          <h2 className="heading  ">Contact Info</h2>
          <ul className="space-y-3 py-1.5">
            <li className="flex gap-3 items-center">
              <MapPin className="hover:from-[#2178B5] hover:bg-gradient-to-tl text-white min-h-8 min-w-8 hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg" />
              <a className="text-sm text-[#4D4D4D] font-semibold hover:underline hover:text-gray-950 cursor-pointer duration-300">
                +91 89281 38434
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="hover:from-[#2178B5] hover:bg-gradient-to-tl text-white min-h-8 min-w-8 hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg" />
              <a className="text-sm text-[#4D4D4D] font-semibold hover:underline hover:text-gray-950 cursor-pointer duration-300">
                info@abtikservices.com
              </a>
            </li>
            <li className="flex gap-3 items-center ">
              <Phone className="hover:from-[#2178B5] text-white min-h-8 min-w-8 hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg" />
              <a className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300">
              313, Patel Ave, Sarkhej - Gandhinagar Hwy, Thaltej, Ahmedabad, Gujarat 380054
              </a>
            </li>
          </ul>
        </div>
        <div className="grid  grid-cols-1 space-y-5 md:grid-cols-3 lg:col-span-2">
          <div className="space-y-3">
            <h2 className="heading">Company</h2>
            <ul className="flex flex-col space-y-2">
              <Link
                to={"/"}
                className="text-sm text-[#4D4D4D] font-semibold hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                About
              </Link>
              <Link
                to={"/contact"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Contact
              </Link>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="heading">Services</h2>
            <ul className="flex flex-col space-y-2">
              <Link
                to={"/"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Certification
              </Link>
              <Link
                to={"/"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Loan Services
              </Link>
              <Link
                to={"/"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Funding
              </Link>
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="heading">Legal</h2>
            <ul className="flex flex-col space-y-2">
              <Link
                to={"/"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to={"/"}
                className="text-sm font-semibold text-[#4D4D4D] hover:underline hover:text-gray-950 cursor-pointer duration-300"
              >
                Cancellation & Refund Policy
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
