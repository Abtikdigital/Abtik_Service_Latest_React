import Mainlayout from "../section/Mainlayout"
import BgImage from "../assets/About/bgImg.svg"
const About=()=>{
    return(<>
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
              Your One-Stop{" "}
              <span className="text-[#3CA2E2] font-extrabold">Solution</span>{" "}
              for all Business Needs
            </h1>
            <p className="paragraph !text-white">
              Empowering Businesses through Comprehensive Solutions From Fund
              Management to Legal Compliance, We've Got You Covered at Abtik
              Startup Advisor Private Limited
            </p>
            <button className="custom-btn">Schedule a call</button>
          </div>
        </section>
    </Mainlayout>
    </>)
}
export default About