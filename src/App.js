import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Conduct/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plan from "./pages/plans/Plan";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import NotFound from "./pages/notFound/NotFound";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plan" element={<Plan />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound/>}/>
       
       
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

// {/* <Routes>
//   <Route>
//   <Route index element={<Home/>}/>
//

//   </Route>

//   </Routes> */}
