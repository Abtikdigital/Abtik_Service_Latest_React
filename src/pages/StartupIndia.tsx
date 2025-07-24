import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/StartUpIndia/bgImg.svg";
import Contact from "../section/Contact";
import Image1 from "../assets/StartUpIndia/Group 1000007811.png";
import {
  Mail,
  MapPin,
  Phone,
  BrainCircuit,
  Package,
  ChevronDown,
  ChevronUp,
  Headset,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const StartupIndia = () => {
  const [isExpanded, setIsExpanded] = useState({
    isOpen: false,
    index: -1,
  });

  const faq = [
    {
      question: "1. What is Abtik?",
      answer:
        "Abtik is a business support firm that helps startups and MSMEs with registration, funding, licensing, and certifications—everything needed to grow.",
    },
    {
      question: "2. Who is Abtik for?",
      answer:
        "Entrepreneurs, startups, MSMEs, professionals, and anyone looking to start or scale a business.",
    },
    {
      question: "3. What makes Abtik different?",
      answer:
        "Expert guidance, quick support, and complete business solutions—all under one roof.",
    },
    {
      question: "4. Why choose Abtik?",
      answer:
        "Because we simplify the complex—offering expert guidance and complete business solutions in one place.",
    },
  ];

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  return (
    <Mainlayout>
      {/* Hero Section */}
      <section
        className="flex justify-center items-center h-[70vh] md:justify-end md:items-center md:h-screen bg-center bg-cover px-7 md:px-14"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <div className="md:w-1/2 space-y-6">
          <h1 className="main-heading">
            <span className="text-[#3CA2E2] font-extrabold">Startup</span> India
          </h1>
          <p className="paragraph !text-white">
            Empowering Businesses through Comprehensive Solutions From Fund
            Management to Legal Compliance, We've Got You Covered at Abtik
            Startup Advisor Private Limited
          </p>
          <button
            className="custom-btn transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="Schedule a consultation call"
          >
            Schedule a call
          </button>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="flex flex-col md:flex-row gap-8 bg-[#f7f7f7] py-16 px-7 md:px-14">
        {/* Left card */}
        <div className="w-full md:w-[300px] flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>
          <div className="space-y-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
              aria-label="Call us at +91 98765 43210"
            >
              <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                <Phone className="w-5 h-5 text-white" />
              </span>
              <div>
                <p className="text-sm text-gray-700">Call Anytime</p>
                <p className="text-xs text-gray-600">+91 98765 43210</p>
              </div>
            </a>
            <a
              href="mailto:info@abtik.com"
              className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
              aria-label="Email us at info@abtik.com"
            >
              <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                <Mail className="w-5 h-5 text-white" />
              </span>
              <div>
                <p className="text-sm text-gray-700">Write Email</p>
                <p className="text-xs text-gray-600">info@abtik.com</p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps?q=123+Business+Hub,+New+Delhi,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:bg-blue-50 p-2 rounded-lg transition"
              aria-label="Visit us at 123 Business Hub, New Delhi, India"
            >
              <span className="bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] p-3 rounded-full">
                <MapPin className="w-5 h-5 text-white" />
              </span>
              <div>
                <p className="text-sm text-gray-700">Visit Us Anytime</p>
                <p className="text-xs text-gray-600">
                  123 Business Hub,
                  <br />
                  New Delhi, India
                </p>
              </div>
            </a>
          </div>
        </div>
        {/* Right image */}
        <div className="flex-grow bg-gradient-to-r from-[#3CA2E2] to-[#052EAA] rounded-2xl flex items-center justify-center h-full">
          <img
            src={Image1}
            alt="Abtik Startup illustration"
            className="max-h-80 w-full rounded-lg object-contain p-4"
          />
        </div>
      </section>

      {/* What is Startup India */}
      <section className="px-7 md:px-14 bg-[#f7f7f7] py-8">
        <div className="bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] rounded-3xl p-8 md:p-12 space-y-4 text-center">
          <h2
            className="sub-heading text-white text-left"
            style={{ fontFamily: "Anton" }}
          >
            Do You Know What Is Start-up India?
          </h2>
          <p className="paragraph !text-white mx-auto text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            dolore reiciendis quas vero pariatur quaerat nisi nulla ad minima
            sed laboriosam, illum saepe veritatis dignissimos dolorum sequi
            iure, quam iusto sit culpa cum consequuntur cumque…
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-7 md:px-14 bg-[#f7f7f7] py-8">
        <h2 className="sub-heading text-center bg-gradient-to-t text-transparent bg-clip-text from-[#3CA2E2] to-[#052EAA]">
          Benefits of Choosing Abtik
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Expert Guidance
            </h3>
            <p className="text-sm text-gray-600">
              Our team of experienced professionals provides tailored advice to
              navigate complex business challenges.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
              <Package className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              All-in-One Solutions
            </h3>
            <p className="text-sm text-gray-600">
              From registration to funding, we offer comprehensive services to
              streamline your business growth.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <div className="mb-4 inline-block p-3 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full">
              <Headset className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Fast & Reliable Support
            </h3>
            <p className="text-sm text-gray-600">
              Get quick responses and dependable assistance to keep your
              business on track.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f7f7f7] py-10 space-y-8">
        <h1 className="sub-heading bg-gradient-to-t text-center bg-clip-text from-[#3CA2E2] to-[#052EAA] text-transparent">
          Frequently Asked Questions
        </h1>
        <div className="px-6 md:px-24 space-y-4">
          {faq.map((data, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
            >
              <h2
                onClick={() => toggleIsExpanded(index)}
                className={`p-4 cursor-pointer flex items-center justify-between text-gray-800 font-medium ${
                  isExpanded.isOpen && isExpanded.index === index
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <span>{data.question}</span>
                <button
                  className="border-2 p-1 h-8 w-8 flex justify-center items-center border-[#052EAA] rounded-lg text-[#052EAA] transition-all duration-300 hover:bg-[#052EAA] hover:text-white"
                  aria-label={
                    isExpanded.isOpen && isExpanded.index === index
                      ? `Collapse ${data.question}`
                      : `Expand ${data.question}`
                  }
                >
                  {isExpanded.isOpen && isExpanded.index === index ? (
                    <ArrowRight className="w-5 h-5" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5" />
                  )}
                </button>
              </h2>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isExpanded.isOpen && isExpanded.index === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-4 bg-gradient-to-t rounded-b-lg from-[#052EAA] to-[#3CA2E2] text-white">
                  {data.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </Mainlayout>
  );
};

export default StartupIndia;
