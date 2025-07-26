import Image1 from "../assets/AboutSection/male-female-graphic-designers-using-laptop.jpg";

const About = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-12 lg:px-14 py-6 gap-6 items-center">
        <div className="space-y-10">
          <h2
            className="sub-heading text-center md:text-left bg-clip-text bg-gradient-to-t text-transparent from-[#3CA2E2] to-[#052EAA]"
            style={{ fontFamily: "Anton" }}
          >
            About Abtik
          </h2>
          <p className="paragraph">
            Abtik Group of Companies is a trusted consultancy dedicated to
            empowering startups, MSMEs, and professionals across India. We
            provide end-to-end business support—from registrations, government
            funding assistance, and licensing to certifications, tax compliance,
            and documentation. With a strong focus on reliability, speed, and
            expertise, Abtik simplifies complex processes and helps businesses
            launch, grow, and succeed—efficiently and confidently. Your
            business, our responsibility.
          </p>
          <div className="text-center md:text-left">
            <button className="custom-btn">Explore</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img src={Image1} className="rounded-4xl md:rounded-2xl lg:rounded-4xl" />
          </div>
          <div>
            <img src={Image1} className="rounded-4xl md:rounded-2xl lg:rounded-4xl" />
          </div>
          <div className="md:col-span-2">
            <img src={Image1} className="rounded-4xl md:max-h-32 lg:max-h-48 max-h-48 w-full" />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
