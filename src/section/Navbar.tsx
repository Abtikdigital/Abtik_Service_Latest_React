import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "../assets/Logo/Blue.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Service",
    path: null,
    subItems: [
      {
        section: "Funding Solution",
        items: [
          { name: "Startup Funding", path: "/funding/startup-funding" },
          { name: "Business Loan", path: "/funding/business-loan" },
          { name: "Venture Capital", path: "/funding/venture-capital" },
          { name: "Angel Investment", path: "/funding/angel-investment" },
        ],
      },
      {
        section: "Trademark & IP",
        items: [
          {
            name: "Trademark Registration",
            path: "/ip/trademark-registration",
          },
          { name: "Copyright Protection", path: "/ip/copyright-protection" },
          { name: "Patent Filing", path: "/ip/patent-filing" },
          { name: "Design Registration", path: "/ip/design-registration" },
        ],
      },
      {
        section: "Certificate & Licence",
        items: [
          { name: "FSSAI License", path: "/certificate/fssai-license" },
          { name: "GST Registration", path: "/certificate/gst-registration" },
          { name: "Import Export License", path: "/certificate/import-export" },
          {
            name: "Startup India Certification",
            path: "/services/certificate/startup-india",
          },
        ],
      },
      {
        section: "Tax & Compliance",
        items: [
          { name: "GST Filing", path: "/tax/gst-filing" },
          { name: "Income Tax Filing", path: "/tax/income-tax" },
          { name: "TDS Compliance", path: "/tax/tds-compliance" },
          { name: "Annual Compliance", path: "/tax/annual-compliance" },
        ],
      },
      {
        section: "Business Registration",
        items: [
          {
            name: "Private Limited Co.",
            path: "/registration/private-limited",
          },
          { name: "LLP Registration", path: "/registration/llp" },
          { name: "Sole Proprietorship", path: "/registration/proprietorship" },
          { name: "Partnership Firm", path: "/registration/partnership" },
        ],
      },
    ],
  },
  { name: "Career", path: "/career" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const DesktopNavbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [hoverTimeout, setHoverTimeout] = useState<any>(null);
  const [megaMenuVisible, setMegaMenuVisible] = useState(false);

  const handleOpenGetInTouchForm = () => {
    dispatch({ type: "open" });
  };

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setMegaMenuVisible(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setMegaMenuVisible(false);
    }, 300); // 300ms delay before closing
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  return (
    <div className="hidden md:block container mx-auto px-14 py-2.5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="h-14" />
        </div>

        {/* Desktop Menu */}
        <ul
          className="flex gap-8 font-medium items-center"
          style={{ fontFamily: "Montserrat Alternates" }}
        >
          {menuItems.map((item) => {
            const isActive = item.path && location.pathname === item.path;
            const isServicesPage =
              item.name === "Service" &&
              (location.pathname.startsWith("/services") ||
                location.pathname.startsWith("/funding") ||
                location.pathname.startsWith("/ip") ||
                location.pathname.startsWith("/certificate") ||
                location.pathname.startsWith("/tax") ||
                location.pathname.startsWith("/registration"));

            return (
              <li
                key={item.name}
                className={`group py-2 ${
                  isActive || isServicesPage
                    ? ""
                    : "border-transparent transition-all duration-300"
                } transition cursor-pointer text-[#A4A4A4] hover:text-[#052EAA] ${
                  isActive || isServicesPage ? "!text-[#052EAA] font-bold" : ""
                }`}
                onMouseEnter={item.name === "Service" ? handleMouseEnter : undefined}
                onMouseLeave={item.name === "Service" ? handleMouseLeave : undefined}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 relative group py-2"
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown
                        size={16}
                        className="group-hover:rotate-180 transition-transform duration-300"
                      />
                    )}
                    <div
                      className={`w-0 transition-all duration-300 group-hover:w-full absolute h-1 bg-[#052EAA] bottom-0 rounded-sm ${
                        isActive ? "!w-full" : ""
                      }`}
                    ></div>
                  </Link>
                ) : (
                  <div className="flex items-center gap-1 relative group py-2">
                    {item.name}
                    {item.subItems && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          megaMenuVisible && item.name === "Service" ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <div
                      className={`w-0 transition-all duration-300 group-hover:w-full absolute h-1 bg-[#052EAA] bottom-0 rounded-sm ${
                        isServicesPage || (megaMenuVisible && item.name === "Service") ? "!w-full" : ""
                      }`}
                    ></div>
                  </div>
                )}

                {/* Mega Menu for Services */}
                {item.subItems && item.name === "Service" && (
                  <div
                    className={`
                      absolute left-0 top-full mt-1.5 bg-white text-gray-800 rounded-xl shadow-2xl w-[97vw] mx-4
                      transform transition-all duration-300 z-40 overflow-hidden border border-gray-200
                      ${
                        megaMenuVisible
                          ? "opacity-100 visible -translate-y-1"
                          : "opacity-0 invisible translate-y-0"
                      }
                    `}
                    style={{ fontFamily: "Montserrat Alternates" }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-5 p-8 gap-8">
                      {item.subItems.map((section) => (
                        <div key={section.section} className="space-y-4">
                          <h3 className="text-lg font-bold text-[#010574] border-b-2 border-[#010574] pb-2">
                            {section.section}
                          </h3>
                          {section.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className={`block text-sm font-medium ${
                                location.pathname === subItem.path
                                  ? "bg-[#e8f3ff] text-[#010574]"
                                  : "bg-[#f2f7fe] hover:bg-[#e8f3ff] hover:text-[#010574]"
                              } rounded-lg transition-all duration-300 transform hover:scale-105`}
                            >
                              <div className="py-3 px-4">
                                <span className="block font-semibold">
                                  {subItem.name}
                                </span>
                                <p className="text-xs text-gray-500 pt-1">
                                  Learn more about our{" "}
                                  {subItem.name.toLowerCase()}.
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Contact Section */}
        <div>
          <button
            className="custom-btn"
            style={{ fontFamily: "Montserrat Alternates" }}
            onClick={handleOpenGetInTouchForm}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

const MobileNavbar = () => {
  const dispatch = useDispatch();
  const handleOpenGetInTouchForm = () => {
    dispatch({ type: "open" });
  };

  const [isMobileViewOpen, setIsMobileViewOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const location = useLocation();

  const toggleMobileView = () => {
    setIsMobileViewOpen(!isMobileViewOpen);
    setIsMobileServicesOpen(false);
    setOpenSection(null);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
    setOpenSection(null);
  };

  const toggleSection = (section:any) => {
    setOpenSection(openSection === section ? null : section);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileViewOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileViewOpen]);

  return (
    <div className="md:hidden relative bg-white">
      {/* Mobile Toggle Button */}
      <div className="container mx-auto py-3 flex px-4 h-20 items-center justify-between">
        <img src={Logo} alt="Logo" className="h-12" />
        <button
          className="p-2 rounded-md border border-[#A4A4A4] hover:bg-[#f5f5f5] transition-colors duration-300"
          onClick={toggleMobileView}
        >
          {isMobileViewOpen ? (
            <X className="w-6 h-6 text-[#010574]" />
          ) : (
            <Menu className="w-6 h-6 text-[#010574]" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileViewOpen && (
        <div className="absolute w-full max-h-[90vh] overflow-auto bg-white z-50 flex flex-col px-4 py-6 shadow-lg border-t border-gray-100">
          {/* Navigation Links */}
          <ul
            className="flex flex-col space-y-2 text-base font-medium w-full"
            style={{ fontFamily: "Montserrat Alternates" }}
          >
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="w-full border-b border-gray-100 py-2"
              >
                {item.subItems ? (
                  <>
                    <div
                      onClick={toggleMobileServices}
                      className="cursor-pointer flex items-center justify-between gap-2 hover:text-[#010574] transition w-full px-4 py-2 text-[#A4A4A4] hover:bg-[#f5f5f5] rounded-md"
                    >
                      {item.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {isMobileServicesOpen && item.name === "Service" && (
                      <ul className="mt-2 space-y-2 text-sm w-full px-4">
                        {item.subItems.map((section) => (
                          <li key={section.section} className="space-y-2">
                            <div
                              onClick={() => toggleSection(section.section)}
                              className="cursor-pointer flex items-center justify-between hover:text-[#010574] transition px-4 py-2 hover:bg-[#f5f5f5] rounded-md"
                            >
                              <h4 className="font-semibold text-[#6B7280]">
                                {section.section}
                              </h4>
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                  openSection === section.section
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </div>
                            {openSection === section.section && (
                              <ul className="space-y-1 pl-8 border-l-2 border-gray-200">
                                {section.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      to={subItem.path}
                                      onClick={toggleMobileView}
                                      className="block hover:text-[#010574] transition py-2 px-4 rounded-md hover:bg-[#f5f5f5] text-[#6B7280]"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={toggleMobileView}
                    className={`block transition px-4 py-2 rounded-md hover:bg-[#f5f5f5] ${
                      location.pathname === item.path
                        ? "text-[#052EAA] font-bold"
                        : "text-[#A4A4A4] hover:text-[#010574]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-4">
              <Link
                to="/contact"
                className="block py-3 px-4 bg-[#010574] text-white rounded-md hover:bg-[#1e1e7a] transition-colors duration-300 text-center font-semibold"
                onClick={() => {
                  toggleMobileView();
                  handleOpenGetInTouchForm();
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav
      className="sticky top-0 left-0 w-full z-50 bg-white shadow-xl"
      style={{ fontFamily: "Montserrat Alternates" }}
    >
      <DesktopNavbar />
      <MobileNavbar />
    </nav>
  );
};

export default Navbar;