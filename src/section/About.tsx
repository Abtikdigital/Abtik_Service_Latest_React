import Image1 from "../assets/AboutSection/male-female-graphic-designers-using-laptop.jpg";

const About = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-6 gap-6 items-center">
        <div className="space-y-10">
          <h2
            className="sub-heading  bg-clip-text bg-gradient-to-t text-transparent
          from-[#3CA2E2]
          to-[#052EAA]
          "
            style={{ fontFamily: "Anton" }}
          >
            About Abtik
          </h2>
          <p className="paragraph  ">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem ipsa voluptate architecto quisquam reprehenderit rem, totam, facere rerum cum harum cumque explicabo dolorum a ex? Hic officiis dolore aliquam!
          </p>
          <div>
            <button className="custom-btn">Explore</button>
          </div>
        </div>
        <div className="grid grid-cols-2  gap-6">
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
  );
};
export default About;
