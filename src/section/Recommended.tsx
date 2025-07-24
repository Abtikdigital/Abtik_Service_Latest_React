import Image1 from "../assets/Recommended/Img1.svg";
const Recommended = () => {
  const recommendedData = [
    {
      title: "Start-Up India Registration",
      img: Image1,
      description:
        "A DPIIT-recognized government program that enables eligible startups to access tax exemptions, self-certification....",
    },
    {
      title: "Seed Fund Scheme",
      img: Image1,
      description:
        "An initiative under Startup India that provides early-stage funding through government-approved incubators. It ....",
    },
    {
      title: "MSME Loan",
      img: Image1,
      description:
        "Loans provided to Micro, Small, and Medium Enterprises under various central and state government schemes. These....",
    },
    {
      title: "NBFC Loan",
      img: Image1,
      description:
        "Loans provided by Non-Banking Financial Companies with simplified documentation and eligibility. These are....",
    },
    {
      title: "PMEGP Loan",
      img: Image1,
      description:
        "A credit-linked subsidy scheme by the Government of India that supports new micro-enterprises in the manufacturing or....",
    },
    {
      title: "NAIIF Loan",
      img: Image1,
      description:
        "Equity-based funding made available through SEBI-registered Alternative Investment Funds (AIFs) under the National....",
    },
    {
      title: "GST & Tax Compliance",
      img: Image1,
      description:
        "GST registration, monthly and annual return filings, income tax filing, TDS management, and audit preparation. Ensures....",
    },
    {
      title: "Tax Exemption Certificates (80-IAC, 12AB, 80G)",
      img: Image1,
      description:
        "Government-issued certificates offering tax benefits to eligible startups and NGOs. These include 80-IAC....",
    },
  ];
  return (
    <section className="bg-[#f7f7f7] px-7 md:px-14 space-y-6 py-6">
      <h2
        className="sub-heading bg-clip-text text-center text-transparent bg-gradient-to-t from-[#3CA2E2] to-[#052EAA]"
        style={{ fontFamily: "Anton" }}
      >
        Recommended For You
      </h2>
      <p className="paragraph text-center">
        Top-picked services for your business goals—get exactly what you need, when you need it.
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
