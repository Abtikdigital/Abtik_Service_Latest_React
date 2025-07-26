import { useNavigate } from "react-router-dom";
import Image1 from "../assets/NewBlog/Image1.svg";

const NewBlog = () => {
  const nav = useNavigate();

  const blogData = [
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
    {
      title: "12121212",
      img: Image1,
      description: "123123",
      path: "/",
    },
  ];
  const HandleClick = (path: any) => {
    nav(path);
  };
  return (
    <section className="bg-[#f7f7f7] py-8 md:py-16 px-5 sm:px-7 md:px-12 lg:px-14">
      <div className="space-y-6">
        <h2
          style={{ fontFamily: "Anton" }}
          className="sub-heading text-center bg-gradient-to-t from-[#3CA2E2] to-[#052EAA] bg-clip-text text-transparent"
        >
          New Blog's
        </h2>
        <p className="paragraph text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, qui.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-6">
          {blogData?.map((blog: any, index: number) => (
            <div key={index} className="space-y-4">
              <img src={blog?.img} className="w-full" />
              <h2 className="text-center text-xl text-[#3CA2E2] font-semibold"
               style={{ fontFamily: "Montserrat Alternates" }}
              >
                {blog?.title}
              </h2>
              <p className="text-center paragraph">{blog?.description}</p>
              <div className="text-center">
                <button
                  className="custom-btn w-full max-w-[120px] !py-3 mx-auto"
                 
                  onClick={() => {
                    HandleClick(blog?.path);
                  }}
          

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
export default NewBlog;
