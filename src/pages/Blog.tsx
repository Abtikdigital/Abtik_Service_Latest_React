import Mainlayout from "../section/Mainlayout";
import BgImage from "../assets/Blog/bgImg.svg";
import Image1 from "../assets/Blog/Image1.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Blog = () => {
  const dispatch=useDispatch()
  const handleOpenDialog=()=>{
    dispatch({type:"open"})
  }
  const blogs = [
    {
      title: "Title1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: Image1,
      slug: "test",
    },
    {
      title: "Title1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: Image1,
      slug: "",
    },
    {
      title: "Title1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: Image1,
      slug: "",
    },
    {
      title: "Title1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: Image1,
      slug: "",
    },
    {
      title: "Title1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: Image1,
      slug: "",
    },
    {
      title: "Title1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: Image1,
      slug: "/",
    },
    {
      title: "Title1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: Image1,
      slug: "/",
    },
    {
      title: "Title1",
      description:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      img: Image1,
      slug: "/",
    },
  ];
  const nav = useNavigate();
  return (
    <>
      <Mainlayout>
        {/* Hero Section */}
        <section
          className="flex justify-center items-center h-[70vh]  md:justify-end md:items-center md:h-screen bg-center bg-cover px-7 md:px-14"
          style={{
            backgroundImage: `url(${BgImage})`,
          }}
        >
          <div className="md:w-1/2 space-y-6 ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                          font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight
                          text-white lg:text-inherit tracking-wide
                          main-heading "
                          style={{fontFamily:"Anton"}}
                          >
              <span className="text-[#3CA2E2] font-extrabold block sm:inline">Blog</span> Abtik
            </h1>
            <p className="paragraph !text-white">
              Empowering Businesses through Comprehensive Solutions From Fund
              Management to Legal Compliance, We've Got You Covered at Abtik
              Startup Advisor Private Limited
            </p>
            <button className="custom-btn"
            onClick={handleOpenDialog}
            >Schedule a call</button>
          </div>
        </section>

        {/* Blog Section */}
        <section className="px-7 md:px-14 py-7 space-y-6 bg-[#f7f7f7]">
          <h2
            style={{ fontFamily: "Anton" }}
            className="sub-heading  text-center bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] bg-clip-text text-transparent"
          >
            New Blog's
          </h2>
          <p className="paragraph text-center">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, qui.
          </p>
          <div className="grid md:grid-cols-4 space-y-6 gap-6">
            {blogs?.map((blog) => (
              <div className="space-y-3">
                <img src={blog?.img} />
                <h2 className=" text-xl text-[#3CA2E2] font-semibold"
                style={{fontFamily:"Montserrat Alternates"}}
                >
                  {blog?.title}
                </h2>
                <p className=" paragraph">{blog?.description}</p>
                <div>
                  <button
                    className="custom-btn "
                    onClick={() => {
                      nav(`/expandedBlog/${blog?.slug}`);
                    }}
                  >
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Mainlayout>
    </>
  );
};
export default Blog;
