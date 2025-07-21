import React, { useEffect, useState, useRef } from "react";

interface TestimonialType {
  name: string;
  company: string;
  text: string;
}

const testimonials: TestimonialType[] = [
  {
    name: "David Lee",
    company: "EdgeWare Inc",
    text: "Working with this platform has transformed how we manage data and collaborate across departments.",
  },
  {
    name: "Alice Smith",
    company: "Tech Solutions",
    text: "Amazing experience, very smooth workflow and excellent support.",
  },
  {
    name: "Bob Johnson",
    company: "NextGen Corp",
    text: "The best platform I've worked on, truly efficient and scalable.",
  },
];

const Testimonial: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);
  const timer = useRef<any>(null);

  // FORWARD ANIMATION
  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % testimonials.length // move forward
      );
    }, 4000);

    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  // Manual navigation via dots
  const handleDotClick = (idx: number) => {
    setCurrent(idx);
    // Reset timer (forward direction)
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % testimonials.length // move forward
      );
    }, 4000);
  };

  const getIndex = (offset: number) =>
    (current + offset + testimonials.length) % testimonials.length;
  const prevIdx = getIndex(-1);
  const nextIdx = getIndex(1);

  return (
    <section className="flex flex-col items-center py-12 bg-[#f7f7f7] min-h-[400px] w-full">
      <h2
        className="sub-heading bg-clip-text text-transparent  bg-gradient-to-t from-[#3CA2E2] to-[#052EAA]"
        style={{ fontFamily: "Anton" }}
      >
        Testimonials
      </h2>
      <div className="relative w-full max-w-[95vw] sm:max-w-[400px] md:max-w-[480px] h-[280px] flex flex-col items-center justify-center mb-8 px-2 sm:px-0 overflow-visible">
        {/* Previous */}
        <Card
          testimonial={testimonials[prevIdx]}
          position="prev"
          key={prevIdx}
        />
        {/* Current */}
        <Card
          testimonial={testimonials[current]}
          position="current"
          key={current}
        />
        {/* Next */}
        <Card
          testimonial={testimonials[nextIdx]}
          position="next"
          key={nextIdx}
        />
      </div>
      {/* Dot navigation */}
      <div className="flex gap-3 mt-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? "bg-blue-700 scale-125 shadow" : "bg-blue-300"
            }`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
};

interface CardProps {
  testimonial: TestimonialType;
  position: "prev" | "current" | "next";
}

const Card: React.FC<CardProps> = ({ testimonial, position }) => {
  // Responsive card width
  let baseStyles =
    "absolute w-[90vw] max-w-[400px] md:max-w-[480px] rounded-3xl bg-gradient-to-b from-blue-800 to-blue-500 text-white p-4 sm:p-6 md:p-8 shadow-lg transition-all duration-700 ease-in-out";
  let styles = "";
  let zIndex = 10;
  let transformStyle = "";

  if (position === "current") {
    styles = "scale-100 opacity-100";
    zIndex = 30;
    transformStyle = "translateY(0)";
  } else if (position === "prev") {
    styles = "scale-75 opacity-80";
    zIndex = 20;
    transformStyle =
      window.innerWidth < 640 ? "translateY(-35px)" : "translateY(-60px)";
  } else if (position === "next") {
    styles = "scale-75 opacity-80";
    zIndex = 20;
    transformStyle =
      window.innerWidth < 640 ? "translateY(35px)" : "translateY(60px)";
  }

  return (
    <div
      className={`${baseStyles} ${styles}`}
      style={{ zIndex, transform: transformStyle }}
    >
      <div className="flex items-center space-x-4 mb-4 md:mb-6">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300"></div>
        <div>
          <p className="font-semibold text-base md:text-lg">
            {testimonial.name}
          </p>
          <p className="text-xs md:text-sm opacity-80">{testimonial.company}</p>
        </div>
      </div>
      <p className="text-sm md:text-base text-center">{testimonial.text}</p>
    </div>
  );
};

export default Testimonial;
