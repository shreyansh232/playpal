import React from "react";

function Hero() {
  return (
    <div className="text-center">
      <h1 class="mt-6 text-4xl font-semibold text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
        Find & Discover Players
        <br /> Near You
        </span>{" "}
      </h1>
      <h2 className="text-white px-10 md:px-16 mt-5">
        Discover players near you for your favorite game
      </h2>
    </div>
  );
}

export default Hero;
