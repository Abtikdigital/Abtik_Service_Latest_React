import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./section/Loader";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const ExpandedBlog=lazy(()=>import("./pages/ExpandedBlog"))
const ScrollToUp = lazy(() => import("./section/ScrollToUp"));
const PageNotFound=lazy(()=>import("./pages/PageNotFound"))
const StartUpIndia=lazy(()=>import("./pages/StartupIndia"))







function App() {
  return (
    <BrowserRouter>
      <ScrollToUp />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/expandedBlog/:slug" element={<ExpandedBlog/>}/> 

          <Route path="/services/certificate/startup-india" element={<StartUpIndia/>}/> 

          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
