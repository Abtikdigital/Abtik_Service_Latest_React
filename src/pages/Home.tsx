import BgImage from "../assets/Hero/bgImg.svg";
import ClientStats from "../section/ClientStats";
import Contact from "../section/Contact";
import FaqSection from "../section/FaqSection";
import Mainlayout from "../section/Mainlayout";
import OurService from "../section/OurService";
import NewBlog from "../section/NewBlog";
import Testimonial from "../section/Testimonial";
import Recommended from "../section/Recommended";
import About from "../section/About";

const Home = () => {
  return (
    <>
      <Mainlayout>
        {/* Hero Section */}
        <section
          className="flex justify-center items-center h-[70vh] sm:h-[80vh] lg:h-[85vh] xl:h-screen 
                     lg:justify-end lg:items-center bg-center bg-cover 
                     px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14
                     relative overflow-hidden"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for better text readability on tablets */}
          <div className="absolute inset-0 bg-black/20 lg:bg-transparent"></div>

          <div
            className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-none lg:w-1/2 
                         space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8
                         text-center lg:text-left"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                          text-white lg:text-inherit tracking-wide
                          main-heading"
              style={{ fontFamily: "Anton" }}
            >
              Your One-Stop{" "}
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">
                Solution
              </span>{" "}
              for all Business Needs
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl
                         leading-relaxed sm:leading-relaxed md:leading-relaxed
                         text-white lg:text-white
                         paragraph !text-white
                         max-w-none sm:max-w-lg md:max-w-xl lg:max-w-none mx-auto lg:mx-0"
            >
              Empowering Businesses through Comprehensive Solutions From Fund
              Management to Legal Compliance, We've Got You Covered at Abtik
              Startup Advisor Private Limited
            </p>
            <div className="pt-2 sm:pt-4">
              <button
                className="custom-btn 
                               text-sm sm:text-base md:text-lg
                               px-6 sm:px-8 md:px-10 lg:px-12
                               py-3 sm:py-3.5 md:py-4
                               hover:scale-105 transition-transform duration-300
                               shadow-lg hover:shadow-xl"
              >
                Schedule a call
              </button>
            </div>
          </div>
        </section>

        {/* Client Stats */}

        <ClientStats />

        {/* About Us Section*/}

        <About />

        {/* Our Service Section */}

        <OurService />

        {/* Recommended Service */}

        <Recommended />

        {/* Testimonial */}

        <Testimonial />

        {/* New Blog */}

        <NewBlog />

        {/* Faq Section */}

        <FaqSection />

        {/* Contact Section */}

        <Contact />
      </Mainlayout>
    </>
  );
};

export default Home;
