import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Logo from "../assets/Logo/Blue.png";
import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isCertificationOpen, setIsCertificationOpen] = useState(false);
  const [isLoanOpen, setIsLoanOpen] = useState(false);
  const [isFundingOpen, setIsFundingOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const [currentPath, setCurrentPath] = useState(pathname);
  const megaMenuRef = useRef(null);
  const serviceLinkRef = useRef(null);
  const closeTimeoutRef:any = useRef(null);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  // Megamenu hover handlers with delay on close
  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openMegaMenu = () => {
    clearCloseTimeout();
    setIsMegaMenuOpen(true);
  };

  const closeMegaMenuDelayed = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  // Mobile toggles
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

  // Styling for megamenu links
  const megaMenuLinkClass =
    "text-base font-medium text-[#A4A4A4] hover:text-[#010574] hover:underline transition-colors duration-300 block py-1";

  // Common link styles for mobile and desktop
  const navLinkClass = (isActive:any) =>
    `text-[#A4A4A4] hover:text-[#052EAA]   transition-all duration-300 ${
      isActive ? "!text-[#052EAA] font-bold" : ""
    }`;

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between sticky top-0 z-50 bg-white px-14 items-center py-2.5 shadow-xl">
        <div>
          <img src={Logo} className="h-14" alt="Logo" />
        </div>
        <ul
          className="flex h-full justify-around items-center gap-5"
          style={{ fontFamily: "Montserrat Alternates" }}
        >
          <li>
            <Link
              to="/"
              className={`relative flex justify-center items-center py-2.5 group ${navLinkClass(
                currentPath === "" || currentPath === "/"
              )}`}
            >
              Home
              <div
                className={`absolute rounded-lg w-0 group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#010574] ${
                  (currentPath === "" || currentPath === "/") && "!w-full !h-1"
                }`}
              ></div>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`relative group py-2.5 ${navLinkClass(
                currentPath === "/about"
              )}`}
            >
              About
              <div
                className={`absolute rounded-lg w-0 group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#010574] ${
                  currentPath === "/about" && "!w-full !h-1"
                }`}
              ></div>
            </Link>
          </li>
          <li
            className="relative"
            ref={serviceLinkRef}
            onMouseEnter={openMegaMenu}
            onMouseLeave={closeMegaMenuDelayed}
          >
            <Link
              to="/services"
              className={`relative group py-2.5 ${navLinkClass(
                currentPath === "/services"
              )}`}
            >
              Service
              <div
                className={`absolute rounded-lg w-0 group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#010574] ${
                  currentPath === "/services" && "!w-full !h-1"
                }`}
              ></div>
            </Link>
            {isMegaMenuOpen && (
              <div
                ref={megaMenuRef}
                onMouseEnter={openMegaMenu}
                onMouseLeave={closeMegaMenuDelayed}
                className="fixed left-0 right-0 top-[72px] bg-white shadow-2xl border-t-4 border-[#010574] z-40"
                style={{ fontFamily: "Montserrat Alternates" }}
              >
                <div className="max-w-7xl mx-auto px-4 py-8">
                  <div className="grid grid-cols-5 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-[#010574] border-b border-[#010574] pb-2">
                        Funding Solution
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/funding/startup-funding"
                            className={megaMenuLinkClass}
                          >
                            Startup Funding
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/funding/business-loan"
                            className={megaMenuLinkClass}
                          >
                            Business Loan
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/funding/venture-capital"
                            className={megaMenuLinkClass}
                          >
                            Venture Capital
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/funding/angel-investment"
                            className={megaMenuLinkClass}
                          >
                            Angel Investment
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-[#010574] border-b border-[#010574] pb-2">
                        Trademark & IP
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/ip/trademark-registration"
                            className={megaMenuLinkClass}
                          >
                            Trademark Registration
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ip/copyright-protection"
                            className={megaMenuLinkClass}
                          >
                            Copyright Protection
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ip/patent-filing"
                            className={megaMenuLinkClass}
                          >
                            Patent Filing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ip/design-registration"
                            className={megaMenuLinkClass}
                          >
                            Design Registration
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-[#010574] border-b border-[#010574] pb-2">
                    
                        Certificate & Licence
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/certificate/fssai-license"
                            className={megaMenuLinkClass}
                          >
                            FSSAI License
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/certificate/gst-registration"
                            className={megaMenuLinkClass}
                          >
                            GST Registration
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/certificate/import-export"
                            className={megaMenuLinkClass}
                          >
                            Import Export License
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/certificate/iso-certification"
                            className={megaMenuLinkClass}
                          >
                            ISO Certification
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-[#010574] border-b border-[#010574] pb-2">
                        Tax & Compliance
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/tax/gst-filing"
                            className={megaMenuLinkClass}
                          >
                            GST Filing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tax/income-tax"
                            className={megaMenuLinkClass}
                          >
                            Income Tax Filing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tax/tds-compliance"
                            className={megaMenuLinkClass}
                          >
                            TDS Compliance
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/tax/annual-compliance"
                            className={megaMenuLinkClass}
                          >
                            Annual Compliance
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-[#010574] border-b border-[#010574] pb-2">
                        Business Registration
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/registration/private-limited"
                            className={megaMenuLinkClass}
                          >
                            Private Limited Co.
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/registration/llp"
                            className={megaMenuLinkClass}
                          >
                            LLP Registration
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/registration/proprietorship"
                            className={megaMenuLinkClass}
                          >
                            Sole Proprietorship
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/registration/partnership"
                            className={megaMenuLinkClass}
                          >
                            Partnership Firm
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li>
            <Link
              to="/career"
              className={`relative group py-2.5 ${navLinkClass(
                currentPath === "/career"
              )}`}
            >
              Career
              <div
                className={`absolute rounded-lg w-0 group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#010574] ${
                  currentPath === "/career" && "!w-full !h-1"
                }`}
              ></div>
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`relative group py-2.5 ${navLinkClass(
                currentPath === "/blog"
              )}`}
            >
              Blog
              <div
                className={`absolute rounded-lg w-0 group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#010574] ${
                  currentPath === "/blog" && "!w-full !h-1"
                }`}
              ></div>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`relative group py-2.5 ${navLinkClass(
                currentPath === "/contact"
              )}`}
            >
              Contact
              <div
                className={`absolute rounded-lg w-0 group-hover:w-full transition-all duration-300 group-hover:h-1 bottom-0 bg-[#010574] ${
                  currentPath === "/contact" && "!w-full !h-1"
                }`}
              ></div>
            </Link>
          </li>
        </ul>
        <div>
          <button
            className="custom-btn"
            style={{ fontFamily: "Montserrat Alternates" }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden sticky top-0 z-50 bg-white shadow-lg">
        <div className="flex items-center justify-between py-3 px-4">
          <img src={Logo} className="h-12" alt="Logo" />
          <button
            className="p-2 rounded-md border border-[#A4A4A4] hover:bg-[#f5f5f5] transition-colors duration-300"
            onClick={toggleNavbar}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#010574]" />
            ) : (
              <Menu className="w-6 h-6 text-[#010574]" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="bg-white px-4 py-6 space-y-2">
            <ul
              className="flex flex-col space-y-2"
              style={{ fontFamily: "Montserrat Alternates", fontSize: "1rem" }}
            >
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${navLinkClass(
                    currentPath === "" || currentPath === "/"
                  )}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${navLinkClass(
                    currentPath === "/about"
                  )}`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleService}
                  className={`w-full text-left py-2 px-4 rounded-md hover:bg-[#f5f5f5] flex justify-between items-center ${navLinkClass(
                    currentPath === "/services"
                  )}`}
                  aria-expanded={isServiceOpen}
                >
                  Service
                  {isServiceOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#010574]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#010574]" />
                  )}
                </button>
                {isServiceOpen && (
                  <div className="pl-4 pt-2 space-y-2">
                    <button
                      onClick={toggleCertification}
                      className="w-full text-left py-2 px-4 rounded-md hover:bg-[#f5f5f5] flex justify-between items-center text-[#A4A4A4] hover:text-[#010574]"
                      aria-expanded={isCertificationOpen}
                    >
                      Certificate & Licence
                      {isCertificationOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#010574]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#010574]" />
                      )}
                    </button>
                    {isCertificationOpen && (
                      <ul className="pl-4 space-y-2">
                        <li>
                          <Link
                            to="/certificate/fssai-license"
                            className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${megaMenuLinkClass}`}
                            onClick={() => setIsOpen(false)}
                          >
                            FSSAI License
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/certificate/gst-registration"
                            className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${megaMenuLinkClass}`}
                            onClick={() => setIsOpen(false)}
                          >
                            GST Registration
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/certificate/import-export"
                            className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${megaMenuLinkClass}`}
                            onClick={() => setIsOpen(false)}
                          >
                            Import Export License
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/certificate/iso-certification"
                            className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${megaMenuLinkClass}`}
                            onClick={() => setIsOpen(false)}
                          >
                            ISO Certification
                          </Link>
                        </li>
                      </ul>
                    )}
                    <button
                      onClick={toggleLoan}
                      className="w-full text-left py-2 px-4 rounded-md hover:bg-[#f5f5f5] flex justify-between items-center text-[#A4A4A4] hover:text-[#010574]"
                      aria-expanded={isLoanOpen}
                    >
                      Loan
                      {isLoanOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#010574]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#010574]" />
                      )}
                    </button>
                    {isLoanOpen && (
                      <ul className="pl-4 space-y-2">
                        <li>
                          <Link
                            to="/funding/business-loan"
                            className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${megaMenuLinkClass}`}
                            onClick={() => setIsOpen(false)}
                          >
                            Business Loan
                          </Link>
                        </li>
                      </ul>
                    )}
                    <button
                      onClick={toggleFunding}
                      className="w-full text-left py-2 px-4 rounded-md hover:bg-[#f5f5f5] flex justify-between items-center text-[#A4A4A4] hover:text-[#010574]"
                      aria-expanded={isFundingOpen}
                    >
                      Funding
                      {isFundingOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#010574]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#010574]" />
                      )}
                    </button>
                    {isFundingOpen && (
                      <ul className="pl-4 space-y-2">
                        <li>
                          <Link
                            to="/funding/startup-funding"
                            className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${megaMenuLinkClass}`}
                            onClick={() => setIsOpen(false)}
                          >
                            Startup Funding
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/funding/venture-capital"
                            className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${megaMenuLinkClass}`}
                            onClick={() => setIsOpen(false)}
                          >
                            Venture Capital
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/funding/angel-investment"
                            className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${megaMenuLinkClass}`}
                            onClick={() => setIsOpen(false)}
                          >
                            Angel Investment
                          </Link>
                        </li>
                      </ul>
                    )}
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/career"
                  className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${navLinkClass(
                    currentPath === "/career"
                  )}`}
                  onClick={() => setIsOpen(false)}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${navLinkClass(
                    currentPath === "/blog"
                  )}`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-2 px-4 rounded-md hover:bg-[#f5f5f5] ${navLinkClass(
                    currentPath === "/contact"
                  )}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-4 bg-[#010574] text-white rounded-md hover:bg-[#1e1e7a] transition-colors duration-300 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;