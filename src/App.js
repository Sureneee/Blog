import { Nav } from "./components/Nav";

import "./App.css";
import { Trending1, Card } from "./components/Card";
import { Trending } from "./components/Treding";
import { Carousel } from "./components/Carousel";
import { Test } from "./components/Test";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { BasicLayout } from "./layout/BasicLayout";
import { Post1 } from "./pages/Blog";
import { NotFound } from "./pages/NotFound";
import { SinglePost } from "./pages/SinglePost";
import { Component } from "./components/Com";


function App() {
  return (
    
    <BasicLayout>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="Blog" element={<Post1 />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Blog/SinglePost" element={<SinglePost/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path=":id" element={<SinglePost/>} />

      </Routes>
    </BasicLayout>

    // <div className=" flex flex-col gap-[100px]">
    //   <Nav />
    //   <Carousel/>
    //   <Trending /> 
    //   <Post1 />

    //   <div className="flex flex-wrap min-w-[1300px] gap-[24px]">
    //     {
    //       mockData.map((post) => {
    //         return <Post />
    //       })
    //     }
    //   </div>

    // </div>
  );
}

export default App;
