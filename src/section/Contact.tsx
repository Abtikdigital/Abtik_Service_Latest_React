import Chart from "react-google-charts";
const Contact = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["MSME", 500],
    ["Startup", 700],
    ["TAX", 1800],
  ];

  const options = {
    title: "Business Segments",
    titleTextStyle: {
      fontName: "Anton", // <-- Your chosen font family
      fontSize: 30, // <-- Desired font size in pixels
      bold: true, // Optional: make the title bold
      color: "#233238", // Optional: set the title color
    },

    pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
    is3D: true, // Enables 3D view
    // slices: {
    //   1: { offset: 0.2 }, // Explodes the second slice
    // },
    backgroundColor: "transparent",
    pieStartAngle: 100, // Rotates the chart
    sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
    legend: {
      position: "bottom",
      alignment: "center",

      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },

    colors: ["#3CA2E2", "#052EAA", "#2D87C4"],
  };

  return (
    <section className="px-7 md:px-14 py-6 bg-[#f7f7f7]">
      <div className="grid grid-cols-1  gap-6 md:grid-cols-4 md:grid-rows-1 space-x-6">
        <div className=" space-y-6 flex flex-col justify-center">
          <h2
            className="sub-heading to-[#052EAA] text-center bg-gradient-to-t from-[#3CA2E2] bg-clip-text text-transparent "
            style={{
              fontFamily: "Anton",
            }}
          >
            Contact Us
          </h2>
          <form className="flex flex-col gap-4 ">
            <div>
              <input
                placeholder="Enter Your Name"
                className="bg-[#ECEFF4] rounded-lg w-full p-2.5 focus:outline-2  outline-[#2178B5] "
              />
            </div>
            <div>
              <input
                placeholder="Enter Your Mail"
                className="bg-[#ECEFF4] rounded-lg w-full p-2.5 focus:outline-2 outline-[#2178B5]"
              />
            </div>
            <div>
              <textarea
                placeholder="Enter Your Message"
                className="bg-[#ECEFF4] rounded-lg w-full p-2.5 overflow-auto h-24 max-h-full resize-none scroll-auto outline-[#2178B5]"
              />
            </div>
            <div className="flex justify-center ">
              <button className="custom-btn w-full  text-center !py-3">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="md:col-span-3 bg-gradient-to-r from-[#3CA2E2]  to-[#052EAA] rounded-lg grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <div className="relative"></div>
          <div className="p-6 ">
            <div className="bg-[#F7F7F7] rounded-3xl p-4">
              <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"240px"}
              />
              <div className="flex justify-center items-center">
                <div className="bg-white rounded-xl shadow-lg ">
                  <ul className="space-y-3 p-3">
                    <li className="grid grid-cols-[auto_1.5rem] items-center gap-2 cursor-pointer ">
                      <h2 className="paragraph">MSME</h2>
                      <div className="bg-[#3CA2E2] h-6 w-6 rounded-md"></div>
                    </li>
                    <li className="grid grid-cols-[auto_1.5rem] items-center gap-2 cursor-pointer">
                      <h2 className="paragraph">STARTUP</h2>
                      <div className="bg-[#052EAA] h-6 w-6 rounded-md"></div>
                    </li>
                    <li className="grid grid-cols-[auto_1.5rem] items-center gap-2 cursor-pointer">
                      <h2 className="paragraph">TAX</h2>
                      <div className="bg-[#2D87C4] h-6 w-6 rounded-md"></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
