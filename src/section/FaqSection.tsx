import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const FaqSection = () => {
  const [isExpanded, setIsExpanded] = useState({
    isOpen: false,
    index: -1,
  });

  const faq = [
    {
      question: "What is Abtik Services?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec sagittis ligula, eget sollicitudin lacus. Proin at varius nisi, et maximus justo. Curabitur ac aliquam dolor, sit amet maximus purus.",
    },
    {
      question: "How does the process work?",
      answer:
        "Once you contact us, our team will assess your needs, propose a solution, and begin working after your approval.",
    },
    {
      question: "Which technologies do you use?",
      answer:
        "We use React, Node.js, Tailwind CSS, Next.js, WordPress, Shopify, and many more modern tech stacks.",
    },
    {
      question: "Do you offer support after project completion?",
      answer:
        "Yes, we offer maintenance and support packages for post-launch improvements and assistance.",
    },
  ];

  const toggleIsExpanded = (index: number) => {
    setIsExpanded((prev) =>
      prev.index === index && prev.isOpen
        ? { isOpen: false, index: -1 }
        : { isOpen: true, index }
    );
  };

  return (
    <section className="bg-[#f7f7f7] py-16">
      <h1 className="main-heading !text-[#052EAA] text-center mb-8">
        Frequently Asked Questions
      </h1>

      <div className="px-6 md:px-24 space-y-4">
        {faq.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-300"
          >
            <h2
              className={`p-4 relative cursor-pointer flex items-center justify-between ${
                isExpanded.isOpen && isExpanded.index === index
                  ? "border-b border-gray-200"
                  : ""
              }`}
              onClick={() => toggleIsExpanded(index)}
            >
              <span>{data.question}</span>
              <button className="border-2 p-1 transition-all duration-300 hover:scale-105 h-8 w-8 flex justify-center items-center border-[#052EAA] rounded-lg text-[#052EAA]">
                {isExpanded.isOpen && isExpanded.index === index ? (
                  <ArrowRight className="w-5 h-5" />
                ) : (
                  <ArrowUpRight className="w-5 h-5" />
                )}
              </button>
            </h2>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isExpanded.isOpen && isExpanded.index === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="p-4 bg-gradient-to-t rounded-b-lg from-[#052EAA] to-[#3CA2E2] text-white">
                {data.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
