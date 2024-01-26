"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Hero() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/products");
  };
  return (
    <section className="bg-purple-100  h-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 h-full  ">
        <div className="flex flex-col lg:flex-row items-center h-full">
          <div className="lg:w-1/2 lg:pr-8">
            <span className=" font-jos text-lg font-semibold text-purple-600   ">
              Best Furniture For Your Castle....
            </span>
            <h1
              //   style={{
              //     fontFamily: " RobotoMono",
              //   }}
              //   className={styles.test}
              className=" font-jos text-4xl sm:text-5xl md:text-6xl lg:text-7xl   text-purple-800 mb-4"
            >
              New Furniture Collection Trends in 2024
            </h1>
            <p className="font-jos  text-gray-500  mb-6">
              Transform your space into a haven of style and comfort with our
              exquisite furniture collection – where every piece tells a story
              of craftsmanship, elegance, and a touch of your unique
              personality. Elevate your home, one exceptional piece at a time.
            </p>
            <button
              onClick={handleButtonClick}
              className=" font-jos bg-purple-800 text-white py-2 px-4 rounded hover:bg-purple-600"
            >
              Shop Now
            </button>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img className="w-full" src="/sofa.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
