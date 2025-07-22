import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Career/bgImg.svg";
import Image1 from "../assets/Career/male-female-graphic-designers-using-laptop.jpg";
import Contact from "../section/Contact";
const Career = () => {
  return (
    <>
      <Mainlayout>
        {/* Hero Section */}
        <section
          className="flex justify-center items-center h-[70vh]  md:justify-end md:items-center md:h-screen bg-center bg-cover px-7 md:px-14"
          style={{
            backgroundImage: `url(${BgImage})`,
          }}
        >
          <div className="md:w-1/2 space-y-6 ">
            <h1 className="main-heading ">
              <span className="text-[#3CA2E2] font-extrabold ">Career</span>{" "}
              Abtik
            </h1>
            <p className="paragraph !text-white">
              Empowering Businesses through Comprehensive Solutions From Fund
              Management to Legal Compliance, We've Got You Covered at Abtik
              Startup Advisor Private Limited
            </p>
            <button className="custom-btn">Schedule a call</button>
          </div>
        </section>

        {/*  Career Opportunity Section*/}

        <div className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-6 gap-6 items-center">
          <div className="space-y-10">
            <h2
              className="sub-heading text-center md:text-left  bg-clip-text bg-gradient-to-t text-transparent
          from-[#3CA2E2]
          to-[#052EAA]
          "
              style={{ fontFamily: "Anton" }}
            >
              Career Opportunities at <br />
              Abtik Services
            </h2>
            <p className="paragraph text-center md:text-left  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem
              ipsa voluptate architecto quisquam reprehenderit rem, totam,
              facere rerum cum harum cumque explicabo dolorum a ex? Hic officiis
              dolore aliquam!
            </p>
          </div>
          <div className="grid grid-cols-1   gap-6">
            <div>
              <img src={Image1} className="rounded-4xl" />
            </div>
          </div>
        </div>
        {/* Job Openings */}
        <div className=" px-7 md:px-14">
            <div>
                <h2 className="sub-heading BG">Job Openings At Abtik</h2>
            </div>

        </div>

        {/* Contact Section */}
        <Contact/>
      </Mainlayout>
    </>
  );
};
export default Career;
