import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/About/bgImg.svg";
import ClientStats from "../section/ClientStats";
import Image1 from "../assets/WhyChooseUs/male-female-graphic-designers-using-laptop.jpg";
import Contact from "../section/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
const About = () => {
  const dispatch=useDispatch()
  const handleOpenDialog=()=>{
    dispatch({type:"open"})
  }
  const TeamData = [
    {
      img: Image1,
      name: "Abinav Thakker",
      position: "Director",
      instagram: "",
      facebook: "",
      linkdin: "",
    },
    {
      img: Image1,
      name: "Raj Bhensla",
      position: "Director",
      instagram: "",
      facebook: "",
      linkdin: "",
    },
    {
      img: Image1,
      name: "Bharat Barot",
      position: "Vice President",
      instagram: "",
      facebook: "",
      linkdin: "",
    },
    {
      img: Image1,
      name: "Virendra Rao",
      position: "Operation Manager",
      instagram: "",
      facebook: "",
      linkdin: "",
    },
  ];
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
            <h1 className="mtext-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                          text-white lg:text-inherit tracking-wide
                          main-heading"
             style={{ fontFamily: "Anton" }}
            >
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">About</span>{" "}
              Abtik
            </h1>
            <p className="paragraph !text-white">
              Empowering Businesses through Comprehensive Solutions From Fund
              Management to Legal Compliance, We've Got You Covered at Abtik
              Startup Advisor Private Limited
            </p>
            <button className="custom-btn"
            onClick={handleOpenDialog}
            >Schedule a call</button>
          </div>
        </section>
        {/* Client Stats */}
        <ClientStats />
        {/* About Vision And Mission */}
        <>
          <div className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-6 gap-6 items-center">
            <div className="space-y-10">
              <h2
                className="sub-heading text-center  bg-clip-text bg-gradient-to-t text-transparent
          from-[#3CA2E2]
          to-[#052EAA]
          "
                style={{ fontFamily: "Anton" }}
              >
                Our Vision
              </h2>
              <p className="paragraph  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                quidem ipsa voluptate architecto quisquam reprehenderit rem,
                totam, facere rerum cum harum cumque explicabo dolorum a ex? Hic
                officiis dolore aliquam!
              </p>
              <div>
                <img src={Image1} className="rounded-4xl" />
              </div>
            </div>
            <div className="space-y-10">
              <h2
                className="sub-heading text-center  bg-clip-text bg-gradient-to-t text-transparent
          from-[#3CA2E2]
          to-[#052EAA]
          "
                style={{ fontFamily: "Anton" }}
              >
                Our Mission
              </h2>
              <p className="paragraph  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                quidem ipsa voluptate architecto quisquam reprehenderit rem,
                totam, facere rerum cum harum cumque explicabo dolorum a ex? Hic
                officiis dolore aliquam!
              </p>
              <div>
                <img src={Image1} className="rounded-4xl" />
              </div>
            </div>
          </div>
        </>
        {/* Why Choose Us */}
        <>
          <div className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-6 gap-6 items-center">
            <div className="space-y-10">
              <h2
                className="sub-heading text-center bg-clip-text bg-gradient-to-t text-transparent
          from-[#3CA2E2]
          to-[#052EAA]
          "
                style={{ fontFamily: "Anton" }}
              >
                Why Choose Abtik
              </h2>
              <p className="paragraph  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                quidem ipsa voluptate architecto quisquam reprehenderit rem,
                totam, facere rerum cum harum cumque explicabo dolorum a ex? Hic
                officiis dolore aliquam!
              </p>
              {/* <div>
                <button className="custom-btn">Explore</button>
              </div> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
              <div>
                <img src={Image1} className="rounded-4xl" />
              </div>
              <div>
                <img src={Image1} className="rounded-4xl" />
              </div>
              <div className="md:col-span-2">
                <img src={Image1} className="rounded-4xl max-h-48 w-full" />
              </div>
            </div>
          </div>
        </>
        {/* Meet Our Expert */}
        <div className="bg-[#f7f7f7] px-7 md:px-14 py-6">
          <div className="space-y-6">
            <h2 className="sub-heading text-center bg-gradient-to-t bg-clip-text text-transparent from-[#3CA2E2] to-[#052EAA]"
            style={{fontFamily:"Anton"}}
            >
              Meet Our Expert
            </h2>
            <p className="paragraph text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
              accusamus.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {TeamData?.map((member) => (
                <div className="space-y-3">
                  <div>
                    <img
                      src={member?.img}
                      className="rounded-4xl hover:scale-105 transition-all duration-300 cursor-pointer"
                    />
                  </div>
                  <h2 className="text-xl text-[#3CA2E2] font-semibold "
                  style={{fontFamily:"Montserrat Alternates"}}
                  >
                    {member?.name}
                  </h2>
                  <h3 className="text-base text-[#757575] font-medium"
                    
                  >
                    {member?.position}
                  </h3>
                  <div className="gap-2.5 flex ">
                    <button className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg ">
                      <FontAwesomeIcon
                        icon={faFacebook}
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
                    </button>{" "}
                    <button className="hover:from-[#2178B5] hover:bg-gradient-to-tl hover:to-[#021E6B] cursor-pointer bg-gradient-to-tr from-[#3CA2E2] to-[#052EAA] p-1.5 rounded-lg ">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-white "
                        size="xl"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </Mainlayout>
    </>
  );
};
export default About;
