import { useNavigate } from "react-router-dom";
import Image1 from "../assets/OurService/Img1.svg";

const OurService = () => {
  const nav = useNavigate();
  const services = [
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
    {
      title: "Title1",
      description: "description",
      img: Image1,
      path: "/",
    },
  ];
  const HandleClick = (path: any) => {
    nav(path);
  };

  return (
    <section className="flex justify-center items-center bg-[#f7f7f7] px-5 sm:px-7 md:px-12 lg:px-14 py-8 md:py-16">
      <div className="w-full space-y-6">
        <h2
          className="sub-heading text-center bg-clip-text bg-gradient-to-b from-[#052EAA] to-[#3CA2E2] text-transparent"
          style={{
            fontFamily: "Anton",
          }}
        >
          Our Service
        </h2>
        <p className="paragraph text-center">
          “Smart business solutions—from registration to funding, licensing & certification—all in one place.”
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
          {services.map((service: any, index: number) => (
            <div key={index} className="space-y-4">
              <img src={service.img} className="w-full" />
              <h2 className="text-center text-xl text-[#3CA2E2] font-semibold">
                {service?.title}
              </h2>
              <p className="text-center paragraph">{service?.description}</p>
              <div className="text-center">
                <button
                  onClick={() => {
                    HandleClick(service?.path);
                  }}
                  className="custom-btn w-full max-w-[120px] !py-3 mx-auto"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurService;
