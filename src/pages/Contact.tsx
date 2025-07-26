import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Contact/bgImg.svg";
import ContactSection from "../section/Contact";
import { useDispatch } from "react-redux";
const Contact = () => {
  const dispatch=useDispatch()
  const handleOpenDialog=()=>{
    dispatch({type:"open"})
  }
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                          text-white lg:text-inherit tracking-wide
                          main-heading"
                          style={{fontFamily:"Anton"}}
                          >
              <span className="text-[#3CA2E2] font-extrabold block sm:inline ">Contact</span>{" "}
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
        {/* Contact Section */}
      <ContactSection/>
      </Mainlayout>
    </>
  );
};
export default Contact;
