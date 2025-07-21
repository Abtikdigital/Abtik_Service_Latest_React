import Image1 from "../assets/Recommended/Img1.svg";
const Recommended = () => {
  const recommendedData = [
    {
      title: "",
      img: Image1,
      description: "",
    },
    {
      title: "",
      img: Image1,
      description: "",
    },
    {
      title: "",
      img: Image1,
      description: "",
    },
  ];
  return (
    <section className="bg-[#f7f7f7] px-14">
      <div className="">
        {recommendedData?.map((data) => (
          <div>
            <img src={data?.img} />
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Recommended;
