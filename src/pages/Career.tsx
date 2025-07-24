import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Career/bgImg.svg";
import Image1 from "../assets/Career/male-female-graphic-designers-using-laptop.jpg";
import Contact from "../section/Contact";
import { MapPin, Clock, Users, Briefcase, ArrowRight } from "lucide-react";

const Career = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      position: "Software Development",
      description: "We are looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for creating responsive and user-friendly web applications using modern technologies like React, TypeScript, and Tailwind CSS.",
      vacancy: 3,
      experience: "2-4 years",
      location: "Bangalore, India",
      type: "Full-time",
      skills: ["Ms Excel", "Powerpoint", "JavaScript", "HTML/CSS", "Tailwind CSS"]
    },
    {
      title: "Backend Developer",
      position: "Software Development",
      description: "Join our backend team to build scalable and robust server-side applications. You'll work with Node.js, Python, databases, and cloud technologies to create efficient APIs and systems.",
      vacancy: 2,
      experience: "3-5 years",
      location: "Mumbai, India",
      type: "Full-time",
      skills: ["Node.js", "Python", "MongoDB", "PostgreSQL", "AWS", "Docker"]
    },    {
      title: "Backend Developer",
      position: "Software Development",
      description: "Join our backend team to build scalable and robust server-side applications. You'll work with Node.js, Python, databases, and cloud technologies to create efficient APIs and systems.",
      vacancy: 2,
      experience: "3-5 years",
      location: "Mumbai, India",
      type: "Full-time",
      skills: ["Node.js", "Python", "MongoDB", "PostgreSQL", "AWS", "Docker"]
    },

  ];

  const handleApplyNow = (jobTitle: string) => {
    // This will be replaced with form functionality later
    alert(`Application for ${jobTitle} will be available soon! We'll add the application form in the next update.`);
  };

  return (
    <>
      <Mainlayout>
        {/* Hero Section */}
        <section
          className="flex justify-center items-center h-[70vh] md:justify-end md:items-center md:h-screen bg-center bg-cover px-7 md:px-14"
          style={{
            backgroundImage: `url(${BgImage})`,
          }}
        >
          <div className="md:w-1/2 space-y-6">
            <h1 className="main-heading">
              <span className="text-[#3CA2E2] font-extrabold">Career</span>{" "}
              Abtik
            </h1>
            <p className="paragraph !text-white">
              Empowering Businesses through Comprehensive Solutions From Fund
              Management to Legal Compliance, We've Got You Covered at Abtik
              Startup Advisor Private Limited
            </p>
            <button className="custom-btn hover:scale-105 transform transition-transform duration-200">
              Schedule a call
            </button>
          </div>
        </section>

        {/* Career Opportunity Section */}
        <div className="grid md:grid-cols-2 bg-[#f7f7f7] px-7 md:px-14 py-12 gap-8 items-center">
          <div className="space-y-6">
            <h2
              className="sub-heading text-center md:text-left bg-clip-text bg-gradient-to-t text-transparent from-[#3CA2E2] to-[#052EAA]"
              style={{ fontFamily: "Anton" }}
            >
              Career Opportunities at <br />
              Abtik Services
            </h2>
            <p className="paragraph text-center md:text-left">
              Join our innovative team and be part of a company that's transforming the business landscape. We offer exciting opportunities for growth, learning, and making a meaningful impact. At Abtik, we believe in nurturing talent and providing a collaborative environment where your skills can flourish.
            </p>
        
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={Image1} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="px-7 md:px-14 py-12 bg-gradient-to-b from-[#f7f7f7] to-white">
          <div>
            <h2
              className="sub-heading bg-clip-text text-center bg-gradient-to-t text-transparent from-[#052EAA] to-[#3CA2E2] mb-12"
              style={{ fontFamily: "Anton" }}
            >
              Job Openings At Abtik
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center">
              {jobOpenings?.map((job, index) => (
                <div 
                  key={index}
                  className="bg-white border hover:border-gray-300 cursor-pointer border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  {/* Job Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#3CA2E2] bg-blue-50 px-3 py-1 rounded-full">
                        {job.position}
                      </span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {job.vacancy} {job.vacancy === 1 ? 'Opening' : 'Openings'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#052EAA] transition-colors">
                      {job.title}
                    </h3>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-[#3CA2E2]" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-[#3CA2E2]" />
                      <span>{job.type} • {job.experience}</span>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {job.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 3).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs bg-gradient-to-r from-[#052EAA] to-[#3CA2E2] text-white px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                          +{job.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => handleApplyNow(job.title)}
                    className="custom-btn flex justify-center items-center gap-1 "
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>

           
          </div>
        </div>

        {/* Contact Section */}
        <Contact />
      </Mainlayout>
    </>
  );
};

export default Career;
