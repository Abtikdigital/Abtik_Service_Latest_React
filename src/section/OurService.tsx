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
    <section className="flex justify-center items-center  bg-[#f7f7f7] px-7 md:px-14 py-6">
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
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          aut?
        </p>
        <div className="gap-6 grid grid-cols-1 md:grid-cols-4 space-y-6">
          {services.map((service: any) => (
            <div className="space-y-4">
              <img src={service.img} className="w-full" />
              <h2 className="text-center text-xl text-[#3CA2E2] font-semibold  ">{service?.title}</h2>
              <p className="text-center paragraph">{service?.description}</p>
              <div className="text-center">
                <button
                  onClick={() => {
                    HandleClick(service?.path);
                  }}
                  className="custom-btn w-30 !py-3 "
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
