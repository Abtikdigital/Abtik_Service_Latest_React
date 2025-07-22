import Image1 from "../assets/Recommended/Img1.svg";
const Recommended = () => {
  const recommendedData = [
    {
      title: "Trademark & patents",
      img: Image1,
      description:
        "Protect your brand and innovations with seamless trademark registration and patent filing services....",
    },
    {
      title: "Trademark & patents",
      img: Image1,
      description:
        "Protect your brand and innovations with seamless trademark registration and patent filing services....",
    },
    {
      title: "Trademark & patents",
      img: Image1,
      description:
        "Protect your brand and innovations with seamless trademark registration and patent filing services....",
    },
    {
      title: "Trademark & patents",
      img: Image1,
      description:
        "Protect your brand and innovations with seamless trademark registration and patent filing services....",
    },
    {
      title: "Trademark & patents",
      img: Image1,
      description:
        "Protect your brand and innovations with seamless trademark registration and patent filing services....",
    },
    {
      title: "Trademark & patents",
      img: Image1,
      description:
        "Protect your brand and innovations with seamless trademark registration and patent filing services....",
    },
    {
      title: "Trademark & patents",
      img: Image1,
      description:
        "Protect your brand and innovations with seamless trademark registration and patent filing services....",
    },
    {
      title: "Trademark & patents",
      img: Image1,
      description:
        "Protect your brand and innovations with seamless trademark registration and patent filing services....",
    },
  ];
  return (
    <section className="bg-[#f7f7f7] px-7 md:px-14 space-y-6">
      <h2
        className="sub-heading bg-clip-text text-center text-transparent bg-gradient-to-t from-[#3CA2E2] to-[#052EAA]"
        style={{ fontFamily: "Anton" }}
      >
        Recommended For You
      </h2>
      <p className="paragraph text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat.
      </p>
      <div className=" gap-6 grid grid-cols-1 md:grid-cols-4">
        {recommendedData?.map((data) => (
          <div className="bg-white p-4 shadow-lg rounded-4xl space-y-3 duration-300  transition-all hover:scale-105 cursor-pointer">
            <img src={data?.img} />
            <h2 className="text-xl text-[#3CA2E2] font-semibold text-center">
              {data?.title}
            </h2>
            <p className="paragraph  text-center">{data?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Recommended;
