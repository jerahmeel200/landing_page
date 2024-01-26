import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
function page() {
  return (
    <div className="flex h-[100vh] w-full  flex-col">
      <div>
        <Navbar />
      </div>

      <div className="flex-1  w-full">
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default page;
